"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Mail, Lock } from "lucide-react";

const inputStyles =
  "w-full bg-zinc-800/50 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.detail || "Login failed");
        return;
      }

      // ✅ Store token
      localStorage.setItem("token", data.access_token);

      console.log("Login successful, redirecting...");

      // ✅ Redirect to dashboard
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("ERROR:", error);
      alert("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="relative">
        <Mail className="absolute left-3 top-3.5 text-zinc-500" size={18} />
        <input
          type="email"
          placeholder="Email Address"
          className={inputStyles}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="relative">
        <Lock className="absolute left-3 top-3.5 text-zinc-500" size={18} />
        <input
          type="password"
          placeholder="Password"
          className={inputStyles}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl font-bold transition-all"
      >
        {isLoading ? <Loader2 className="animate-spin mr-2" /> : "Sign In"}
      </Button>
    </form>
  );
}
