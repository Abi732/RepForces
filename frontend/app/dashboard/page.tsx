import ActivityFeed from "@/components/custom/dashboard/Activityfeed";
import Leaderboard from "@/components/custom/dashboard/Leaderboard";
import RepChart from "@/components/custom/dashboard/repchart";
import TopNavbar from "@/components/custom/dashboard/Topnavbar";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom/dashboard/sidebar";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex w-full">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <main className="flex-1">
          {/* Top Bar */}
          <div className="p-4 border-b flex items-center gap-32">
            <SidebarTrigger />
            <TopNavbar />
          </div>

          {/* Dashboard Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6 p-6">
            {/* Left Feed */}
            <div className="col-span-2 space-y-6">
              <ActivityFeed />
            </div>

            {/* Right Widgets */}
            <div className="space-y-6">
              <RepChart />
              <Leaderboard />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
