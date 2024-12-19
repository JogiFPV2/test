import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  LineChart,
  PieChart,
  TrendingUp,
  Users,
  Calendar,
} from "lucide-react";

interface AnalyticsViewProps {
  serviceStats?: {
    total: number;
    completed: number;
    upcoming: number;
    cancelled: number;
  };
  resourceUtilization?: {
    venues: { name: string; usage: number }[];
    staff: { role: string; hours: number }[];
  };
  performanceMetrics?: {
    onTimeStart: number;
    clientSatisfaction: number;
    resourceEfficiency: number;
  };
}

const AnalyticsView = ({
  serviceStats = {
    total: 150,
    completed: 120,
    upcoming: 25,
    cancelled: 5,
  },
  resourceUtilization = {
    venues: [
      { name: "Main Chapel", usage: 75 },
      { name: "Garden Area", usage: 45 },
      { name: "Reception Hall", usage: 60 },
    ],
    staff: [
      { role: "Coordinators", hours: 420 },
      { role: "Support Staff", hours: 380 },
      { role: "Officiants", hours: 280 },
    ],
  },
  performanceMetrics = {
    onTimeStart: 95,
    clientSatisfaction: 4.8,
    resourceEfficiency: 88,
  },
}: AnalyticsViewProps) => {
  return (
    <div className="w-full h-full bg-gray-50 p-6 overflow-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="flex items-center p-6">
              <Calendar className="h-8 w-8 text-primary mr-4" />
              <div>
                <p className="text-sm text-muted-foreground">Total Services</p>
                <h2 className="text-2xl font-bold">{serviceStats.total}</h2>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <TrendingUp className="h-8 w-8 text-green-500 mr-4" />
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <h2 className="text-2xl font-bold">{serviceStats.completed}</h2>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Users className="h-8 w-8 text-blue-500 mr-4" />
              <div>
                <p className="text-sm text-muted-foreground">Upcoming</p>
                <h2 className="text-2xl font-bold">{serviceStats.upcoming}</h2>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <PieChart className="h-8 w-8 text-red-500 mr-4" />
              <div>
                <p className="text-sm text-muted-foreground">Cancelled</p>
                <h2 className="text-2xl font-bold">{serviceStats.cancelled}</h2>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="resource" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="resource">Resource Utilization</TabsTrigger>
          <TabsTrigger value="performance">Performance Metrics</TabsTrigger>
        </TabsList>

        <TabsContent value="resource">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Venue Usage (%)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {resourceUtilization.venues.map((venue) => (
                    <div key={venue.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{venue.name}</span>
                        <span>{venue.usage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2"
                          style={{ width: `${venue.usage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Staff Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {resourceUtilization.staff.map((staffMember) => (
                    <div key={staffMember.role} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{staffMember.role}</span>
                        <span>{staffMember.hours}h</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2"
                          style={{
                            width: `${(staffMember.hours / 500) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>On-Time Start Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">
                    {performanceMetrics.onTimeStart}%
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Services Started on Schedule
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Client Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">
                    {performanceMetrics.clientSatisfaction}/5
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Average Rating
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resource Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">
                    {performanceMetrics.resourceEfficiency}%
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Overall Efficiency Score
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsView;
