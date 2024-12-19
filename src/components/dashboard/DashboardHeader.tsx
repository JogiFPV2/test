import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Calendar,
  ListTodo,
  BarChart2,
  Settings,
  Moon,
  Sun,
} from "lucide-react";

interface DashboardHeaderProps {
  currentView?: "calendar" | "tasks" | "analytics";
  onViewChange?: (view: "calendar" | "tasks" | "analytics") => void;
  isDarkMode?: boolean;
  onThemeChange?: (isDark: boolean) => void;
}

const DashboardHeader = ({
  currentView = "calendar",
  onViewChange = () => {},
  isDarkMode = false,
  onThemeChange = () => {},
}: DashboardHeaderProps) => {
  return (
    <header className="w-full h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>

        <Tabs
          value={currentView}
          onValueChange={(value: any) => onViewChange(value)}
          className="h-10"
        >
          <TabsList>
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Calendar
            </TabsTrigger>
            <TabsTrigger value="tasks" className="flex items-center gap-2">
              <ListTodo className="h-4 w-4" />
              Tasks
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart2 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onThemeChange(!isDarkMode)}
          className="h-9 w-9"
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="h-9 w-9">
              <Settings className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Purple Theme</DropdownMenuItem>
            <DropdownMenuItem>Navy Theme</DropdownMenuItem>
            <DropdownMenuItem>Emerald Theme</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
