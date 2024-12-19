import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import ServiceCard from "./ServiceCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalendarViewProps {
  services?: Array<{
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    attendees: number;
    status: "pending" | "confirmed" | "completed" | "cancelled";
  }>;
  selectedDate?: Date;
  view?: "day" | "week" | "month";
}

const CalendarView = ({
  services = [
    {
      id: "1",
      title: "Memorial Service",
      date: "2024-02-20",
      time: "14:00",
      location: "Main Chapel",
      attendees: 50,
      status: "pending",
    },
    {
      id: "2",
      title: "Wedding Ceremony",
      date: "2024-02-21",
      time: "16:00",
      location: "Garden Chapel",
      attendees: 120,
      status: "confirmed",
    },
  ],
  selectedDate = new Date(),
  view = "month",
}: CalendarViewProps) => {
  return (
    <div className="h-full w-full bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">Calendar</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Tabs defaultValue={view} className="w-[300px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="day">Day</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-[1fr_300px] gap-6">
        <div className="rounded-lg border p-4">
          <Calendar
            mode="single"
            selected={selectedDate}
            className="rounded-md border"
          />
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Today's Services</h3>
          <div className="space-y-4 overflow-auto max-h-[800px]">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                date={service.date}
                time={service.time}
                location={service.location}
                attendees={service.attendees}
                status={service.status}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
