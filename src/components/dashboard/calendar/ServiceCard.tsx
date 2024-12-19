import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users } from "lucide-react";

interface ServiceCardProps {
  title?: string;
  date?: string;
  time?: string;
  location?: string;
  attendees?: number;
  status?: "pending" | "confirmed" | "completed" | "cancelled";
}

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-green-100 text-green-800",
  completed: "bg-blue-100 text-blue-800",
  cancelled: "bg-red-100 text-red-800",
};

const ServiceCard = ({
  title = "Memorial Service",
  date = "2024-02-20",
  time = "14:00",
  location = "Main Chapel",
  attendees = 50,
  status = "pending",
}: ServiceCardProps) => {
  return (
    <Card className="w-[280px] h-[160px] bg-white hover:shadow-lg transition-shadow">
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg truncate">{title}</h3>
          <Badge
            variant="secondary"
            className={`${statusColors[status]} capitalize`}
          >
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 pb-2">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
          <Clock className="h-4 w-4" />
          <span>{`${date} at ${time}`}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
          <MapPin className="h-4 w-4" />
          <span className="truncate">{location}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Users className="h-4 w-4" />
          <span>{attendees} expected attendees</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
