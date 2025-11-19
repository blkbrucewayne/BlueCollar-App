import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    if (session.user.role !== "WORKER") {
      return NextResponse.json(
        { error: "Only workers can apply for tasks" },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { taskId, proposedRate, message } = body;

    if (!taskId || !proposedRate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if task exists and is open
    const task = await prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task) {
      return NextResponse.json(
        { error: "Task not found" },
        { status: 404 }
      );
    }

    if (task.status !== "OPEN") {
      return NextResponse.json(
        { error: "Task is not open for applications" },
        { status: 400 }
      );
    }

    // Check if already applied
    const existingBooking = await prisma.booking.findFirst({
      where: {
        taskId,
        workerId: session.user.id,
      },
    });

    if (existingBooking) {
      return NextResponse.json(
        { error: "You have already applied for this task" },
        { status: 400 }
      );
    }

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        taskId,
        workerId: session.user.id,
        clientId: task.clientId,
        proposedRate: parseFloat(proposedRate),
        message: message || null,
      },
      include: {
        worker: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        task: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    return NextResponse.json({ booking }, { status: 201 });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
