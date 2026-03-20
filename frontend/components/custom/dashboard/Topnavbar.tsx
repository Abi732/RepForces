"use client";

import { Input } from "@/components/ui/input";
import { Bell, Flame } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function TopNavbar() {
  return (
    <div className="flex items-center justify-between w-full">
      {/* LEFT SECTION */}
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">Welcome back, Kushagra 👋</h2>
        <p className="text-sm text-muted-foreground">
          Ready to crush today's reps?
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <Input placeholder="Search exercises..." className="w-64" />

        {/* Streak */}
        <div className="flex items-center gap-1 text-orange-500 font-medium">
          <Flame size={20} />5
        </div>

        {/* Notification */}
        <Bell className="cursor-pointer" size={20} />

        {/* Profile */}
        <Avatar>
          <AvatarFallback>K</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
