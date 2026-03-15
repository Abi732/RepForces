"use client";
import React, { useState } from "react";
import logo from "@/assets/Transparent.png";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import AuthModal from "./modal/AuthModal";

function Navbar() {
const { user, loading } = useAuth();

const [authOpen, setAuthOpen] = useState(false);
const [authMode, setAuthMode] = useState<"login" | "signup">("login");

const logout = () => {
localStorage.removeItem("token");
window.location.reload();
};

if (loading) return null;

return (
  <>
    {" "}
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-0 flex justify-between items-center bg-black/10 backdrop-blur-md border-b border-white/10 text-white">
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <Image
          src={logo}
          alt="logo"
          width={120}
          height={20}
          className="object-contain"
          priority
        />
      </Link>
      <div className="flex items-center gap-8">
        {user ? (
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
              <Link href="/dashboard" className="hover:text-white">
                Dashboard
              </Link>

              <Link href="/contests" className="hover:text-white">
                Contests
              </Link>

              <Link href="/leaderBoard" className="hover:text-white">
                Leaderboard
              </Link>
            </div>

            <div className="flex items-center gap-4 pl-4 border-l border-white/20">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {user.username}
              </span>

              <Button
                variant="destructive"
                size="sm"
                onClick={logout}
                className="rounded-full px-5"
              >
                Logout
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="rounded-full px-6 hover:bg-white/10 hover:text-white"
              onClick={() => {
                setAuthMode("login");
                setAuthOpen(true);
              }}
            >
              Login
            </Button>

            <Button
              className="bg-white text-black hover:bg-gray-200 rounded-full px-6"
              onClick={() => {
                setAuthMode("signup");
                setAuthOpen(true);
              }}
            >
              Sign up
            </Button>
          </div>
        )}
      </div>
    </nav>
    <AuthModal
      isOpen={authOpen}
      mode={authMode}
      setMode={setAuthMode}
      onClose={() => setAuthOpen(false)}
    />
  </>
);
}

export default Navbar;
