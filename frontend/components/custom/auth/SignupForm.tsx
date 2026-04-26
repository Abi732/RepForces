"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, User, Mail, Lock } from "lucide-react";

const inputStyles =
  "w-full bg-zinc-800/50 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Signup response:", data);

      if (!res.ok) {
        // 🔥 Better error handling
        if (data.detail) {
          alert(data.detail); // Email already exists / Username already exists
        } else {
          alert("Signup failed");
        }
        return;
      }

      alert("Account created successfully! Please login.");
    } catch (error) {
      console.error("ERROR:", error);
      alert("Server error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSignup} className="space-y-4">
      <div className="relative">
        <User className="absolute left-3 top-3.5 text-zinc-500" size={18} />
        <input
          type="text"
          placeholder="Username"
          className={inputStyles}
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          required
        />
      </div>

      <div className="relative">
        <Mail className="absolute left-3 top-3.5 text-zinc-500" size={18} />
        <input
          type="email"
          placeholder="Email Address"
          className={inputStyles}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div className="relative">
        <Lock className="absolute left-3 top-3.5 text-zinc-500" size={18} />
        <input
          type="password"
          placeholder="Create Password"
          className={inputStyles}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-white text-black hover:bg-zinc-200 py-6 rounded-xl font-bold transition-all"
      >
        {isLoading ? (
          <Loader2 className="animate-spin mr-2" />
        ) : (
          "Create Account"
        )}
      </Button>
    </form>
  );
}
