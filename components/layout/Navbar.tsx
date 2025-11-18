"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { User, LogOut, Menu, Briefcase, MessageSquare, DollarSign } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path ? "text-primary-600 font-semibold" : "text-gray-700 hover:text-primary-600";
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">BlueCollar</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/tasks" className={isActive("/tasks")}>
              Browse Tasks
            </Link>

            {session ? (
              <>
                {session.user.role === "CLIENT" && (
                  <>
                    <Link href="/tasks/new" className={isActive("/tasks/new")}>
                      Post Task
                    </Link>
                    <Link href="/dashboard/client" className={isActive("/dashboard/client")}>
                      Dashboard
                    </Link>
                  </>
                )}

                {session.user.role === "WORKER" && (
                  <>
                    <Link href="/dashboard/worker" className={isActive("/dashboard/worker")}>
                      Dashboard
                    </Link>
                  </>
                )}

                <Link href="/messages" className={isActive("/messages")}>
                  <MessageSquare className="h-5 w-5" />
                </Link>

                <div className="relative group">
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-primary-600">
                    <User className="h-5 w-5" />
                    <span>{session.user.name}</span>
                  </button>

                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <div className="flex items-center space-x-2">
                        <LogOut className="h-4 w-4" />
                        <span>Sign Out</span>
                      </div>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="text-gray-700 hover:text-primary-600">
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/tasks"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Browse Tasks
            </Link>

            {session ? (
              <>
                {session.user.role === "CLIENT" && (
                  <>
                    <Link
                      href="/tasks/new"
                      className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                    >
                      Post Task
                    </Link>
                    <Link
                      href="/dashboard/client"
                      className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                  </>
                )}

                {session.user.role === "WORKER" && (
                  <Link
                    href="/dashboard/worker"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                )}

                <Link
                  href="/profile"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>

                <button
                  onClick={() => signOut()}
                  className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
