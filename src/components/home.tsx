import React, { useState } from "react";
import DashboardHeader from "./dashboard/DashboardHeader";
import UpcomingServicesPanel from "./dashboard/UpcomingServicesPanel";
import CalendarView from "./dashboard/calendar/CalendarView";
import TaskView from "./dashboard/tasks/TaskView";
import AnalyticsView from "./dashboard/analytics/AnalyticsView";
import NotificationPanel from "./dashboard/NotificationPanel.tsx";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type ViewType = "calendar" | "tasks" | "analytics";

interface HomeProps {
  initialView?: ViewType;
  isDarkMode?: boolean;
  showNotifications?: boolean;
}

const Home = ({
  initialView = "calendar",
  isDarkMode = false,
  showNotifications = true,
}: HomeProps) => {
  const [currentView, setCurrentView] = useState<ViewType>(initialView);
  const [isNotificationOpen, setIsNotificationOpen] =
    useState(showNotifications);

  const renderMainContent = () => {
    switch (currentView) {
      case "calendar":
        return <CalendarView />;
      case "tasks":
        return <TaskView />;
      case "analytics":
        return <AnalyticsView />;
      default:
        return <CalendarView />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader
        currentView={currentView}
        onViewChange={setCurrentView}
        isDarkMode={isDarkMode}
      />

      <main className="flex h-[calc(100vh-64px)]">
        <div className="flex-1 overflow-auto">{renderMainContent()}</div>
        <UpcomingServicesPanel />
      </main>

      <Dialog open={isNotificationOpen} onOpenChange={setIsNotificationOpen}>
        <DialogContent
          className="p-0"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <NotificationPanel
            onNotificationClick={() => setIsNotificationOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
