"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import { X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-zinc-950 border border-white/10 rounded-2xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-500 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-all"
        >
          <X size={18} />
        </button>

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-zinc-400 text-sm">
            {mode === "login"
              ? "Sign in to manage your contests"
              : "Start your journey with us today"}
          </p>
        </div>

        <div className="space-y-4">
          {mode === "login" ? (
            <div>
              <LoginForm />
              <p className="mt-6 text-center text-sm text-zinc-500">
                Don't have an account?{" "}
                <button
                  onClick={() => setMode("signup")}
                  className="text-blue-500 hover:text-blue-400 font-semibold hover:underline"
                >
                  Sign up
                </button>
              </p>
            </div>
          ) : (
            <div>
              <SignupForm />
              <p className="mt-6 text-center text-sm text-zinc-500">
                Already have an account?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-blue-500 hover:text-blue-400 font-semibold hover:underline"
                >
                  Login
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default AuthModal;