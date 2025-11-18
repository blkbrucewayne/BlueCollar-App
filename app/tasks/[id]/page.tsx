"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { MapPin, DollarSign, Calendar, User, Briefcase, MessageSquare } from "lucide-react";
import { format } from "date-fns";
import toast from "react-hot-toast";

export default function TaskDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const [task, setTask] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isApplying, setIsApplying] = useState(false);
  const [applicationMessage, setApplicationMessage] = useState("");
  const [proposedRate, setProposedRate] = useState("");

  useEffect(() => {
    fetchTask();
  }, [params.id]);

  const fetchTask = async () => {
    try {
      const response = await fetch(`/api/tasks/${params.id}`);
      const data = await response.json();
      setTask(data.task);
      setProposedRate(data.task.budget.toString());
    } catch (error) {
      console.error("Error fetching task:", error);
      toast.error("Failed to load task");
    } finally {
      setIsLoading(false);
    }
  };

  const handleApply = async () => {
    if (!session) {
      toast.error("Please login to apply");
      router.push("/auth/login");
      return;
    }

    if (session.user.role !== "WORKER") {
      toast.error("Only workers can apply for tasks");
      return;
    }

    if (!proposedRate || parseFloat(proposedRate) <= 0) {
      toast.error("Please enter a valid rate");
      return;
    }

    setIsApplying(true);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          taskId: params.id,
          proposedRate: parseFloat(proposedRate),
          message: applicationMessage,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to apply");
      }

      toast.success("Application submitted successfully!");
      fetchTask();
      setApplicationMessage("");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsApplying(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Task not found</h2>
          <button
            onClick={() => router.push("/tasks")}
            className="text-primary-600 hover:text-primary-700"
          >
            Browse all tasks
          </button>
        </div>
      </div>
    );
  }

  const isOwner = session?.user?.id === task.clientId;
  const hasApplied = task.bookings?.some((b: any) => b.workerId === session?.user?.id);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                {task.category}
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                {task.status}
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-2">{task.title}</h1>
            <div className="text-4xl font-bold">${task.budget}</div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Location</div>
                  <div className="font-semibold">{task.location}</div>
                </div>
              </div>

              {task.startDate && (
                <div className="flex items-center gap-3">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Start Date</div>
                    <div className="font-semibold">
                      {format(new Date(task.startDate), "MMM d, yyyy h:mm a")}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <User className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Posted by</div>
                  <div className="font-semibold">{task.client.name}</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Task Description</h2>
              <p className="text-gray-700 whitespace-pre-wrap">{task.description}</p>
            </div>

            {task.bookings && task.bookings.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">
                  Applications ({task.bookings.length})
                </h2>
                {isOwner && (
                  <div className="space-y-3">
                    {task.bookings.map((booking: any) => (
                      <div key={booking.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-semibold">{booking.worker.name}</div>
                            <div className="text-sm text-gray-600">
                              Proposed rate: ${booking.proposedRate}
                            </div>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              booking.status === "PENDING"
                                ? "bg-yellow-100 text-yellow-800"
                                : booking.status === "ACCEPTED"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {booking.status}
                          </span>
                        </div>
                        {booking.message && (
                          <p className="text-gray-700 text-sm">{booking.message}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Application Form */}
            {session?.user?.role === "WORKER" && !isOwner && task.status === "OPEN" && (
              <div className="border-t pt-6">
                {hasApplied ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <p className="text-green-800 font-semibold">
                      You have already applied for this task
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold mb-4">Apply for this Task</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Your Proposed Rate ($)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={proposedRate}
                          onChange={(e) => setProposedRate(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Message to Client (Optional)
                        </label>
                        <textarea
                          rows={4}
                          value={applicationMessage}
                          onChange={(e) => setApplicationMessage(e.target.value)}
                          placeholder="Tell the client why you're a good fit for this task..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>

                      <button
                        onClick={handleApply}
                        disabled={isApplying}
                        className="w-full bg-primary-600 text-white py-3 rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                      >
                        {isApplying ? "Submitting..." : "Submit Application"}
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {isOwner && (
              <div className="border-t pt-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800">
                    <span className="font-semibold">This is your task.</span> You'll be notified when workers apply.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
