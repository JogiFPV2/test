import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceCard from "./calendar/ServiceCard";
import { Bell, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface UpcomingService {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  status: "pending" | "confirmed" | "completed" | "cancelled";
}

interface UpcomingServicesPanelProps {
  services?: UpcomingService[];
}

const defaultServices: UpcomingService[] = [
  {
    id: "1",
    title: "Memorial Service - Johnson Family",
    date: "2024-02-20",
    time: "14:00",
    location: "Main Chapel",
    attendees: 50,
    status: "confirmed",
  },
  {
    id: "2",
    title: "Celebration of Life - Smith",
    date: "2024-02-21",
    time: "10:00",
    location: "Garden View Room",
    attendees: 75,
    status: "pending",
  },
  {
    id: "3",
    title: "Memorial Gathering - Williams",
    date: "2024-02-22",
    time: "15:30",
    location: "East Wing",
    attendees: 30,
    status: "confirmed",
  },
];

const UpcomingServicesPanel = ({
  services = defaultServices,
}: UpcomingServicesPanelProps) => {
  return (
    <Card className="h-[918px] w-[320px] bg-white border-l">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-gray-500" />
            <CardTitle className="text-lg">Upcoming Services</CardTitle>
          </div>
          <div className="relative">
            <Bell className="h-5 w-5 text-gray-500" />
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center p-0 text-xs"
            >
              3
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <ScrollArea className="h-[830px] pr-4">
          <div className="flex flex-col gap-4">
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
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default UpcomingServicesPanel;
