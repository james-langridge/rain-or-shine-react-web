import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import stravaApiLogo from "../assets/api_logo_cptblWith_strava_horiz_orange.svg";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Navigation */}
      <nav className="px-4 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center">
          <div className="flex w-full items-center justify-between">
            {/* Logo/Brand */}
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span className="text-2xl">⛅</span>
              <h1 className="text-lg sm:text-xl font-bold">Rain or Shine</h1>
            </Link>

            {/* User Menu */}
            {user && (
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  {user.profileImageUrl && (
                    <img
                      src={user.profileImageUrl}
                      alt={user.displayName}
                      className="h-8 w-8 rounded-full ring-2 ring-background"
                    />
                  )}
                  <span className="text-sm font-medium hidden sm:inline">
                    {user.displayName}
                  </span>
                </div>

                <Button variant="ghost" size="sm" onClick={logout}>
                  <span className="hidden sm:inline">Sign Out</span>
                  <span className="sm:hidden">Out</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-6 mx-auto px-3 flex-1">{children}</main>

      {/* Footer  */}
      <footer className="border-t px-4 mt-auto">
        <div className="flex flex-col sm:flex-row sm:h-16 items-center sm:justify-between py-4 gap-3 sm:gap-0">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            <a
              href="https://www.ngridge.com/en"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              James Langridge
            </a>{" "}
            © 2025
            {" · "}
            <Link
              to="/privacy"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <img
            src={stravaApiLogo}
            alt="Compatible with Strava"
            className="h-4 flex-shrink-0"
          />
        </div>
      </footer>
    </div>
  );
}
