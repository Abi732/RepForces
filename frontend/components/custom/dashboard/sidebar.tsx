"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { Trophy, HelpCircle, User, Calendar, Feather } from "lucide-react";
import ThemeToggle from "@/components/custom/dashboard/themetoggle";

export function AppSidebar() {
  return (
    <Sidebar>
      {/* Header */}
      <SidebarHeader className="text-lg font-bold px-4 py-3">
        RepForces
      </SidebarHeader>

      {/* Middle Menu */}
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Trophy className="mr-2 h-4 w-4" />
              Contests
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <Calendar className="mr-2 h-4 w-4" />
              Calendar
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <HelpCircle className="mr-2 h-4 w-4" />
              FAQs
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <Feather className="mr-2 h-4 w-4" />
              Exercises
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <ThemeToggle />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <User className="mr-2 h-4 w-4" />
              Account
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
