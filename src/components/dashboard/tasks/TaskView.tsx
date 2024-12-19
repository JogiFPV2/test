import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileCheck, Home, Users, Bell, CheckCircle2 } from "lucide-react";

interface Task {
  id: string;
  title: string;
  category: "Documentation" | "Venue" | "Ceremony";
  status: "pending" | "in-progress" | "completed";
  dueDate: string;
}

interface TaskViewProps {
  tasks?: Task[];
}

const defaultTasks: Task[] = [
  {
    id: "1",
    title: "Complete service agreement forms",
    category: "Documentation",
    status: "pending",
    dueDate: "2024-02-25",
  },
  {
    id: "2",
    title: "Confirm venue availability",
    category: "Venue",
    status: "in-progress",
    dueDate: "2024-02-23",
  },
  {
    id: "3",
    title: "Plan ceremony sequence",
    category: "Ceremony",
    status: "completed",
    dueDate: "2024-02-20",
  },
];

const TaskView = ({ tasks = defaultTasks }: TaskViewProps) => {
  const categories = ["Documentation", "Venue", "Ceremony"];

  const getTasksByCategory = (category: string) => {
    return tasks.filter((task) => task.category === category);
  };

  const getProgressByCategory = (category: string) => {
    const categoryTasks = getTasksByCategory(category);
    const completed = categoryTasks.filter(
      (task) => task.status === "completed",
    ).length;
    return (completed / categoryTasks.length) * 100;
  };

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    "in-progress": "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
  };

  const CategoryIcon = {
    Documentation: FileCheck,
    Venue: Home,
    Ceremony: Users,
  };

  return (
    <div className="w-full h-full bg-gray-50 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Service Preparation Tracker</h1>
        <p className="text-gray-600">
          Track and manage service preparation tasks
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {categories.map((category) => (
          <Card key={category}>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {CategoryIcon[category] &&
                    React.createElement(CategoryIcon[category], {
                      className: "h-5 w-5",
                    })}
                  <h3 className="font-semibold">{category}</h3>
                </div>
                <Badge variant="secondary">
                  {getTasksByCategory(category).length} tasks
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <Progress
                value={getProgressByCategory(category)}
                className="h-2"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="Documentation" className="w-full">
        <TabsList className="mb-4">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <ScrollArea className="h-[600px] w-full">
              <div className="space-y-4">
                {getTasksByCategory(category).map((task) => (
                  <Card key={task.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-gray-400" />
                          <div>
                            <h4 className="font-medium">{task.title}</h4>
                            <p className="text-sm text-gray-500">
                              Due: {task.dueDate}
                            </p>
                          </div>
                        </div>
                        <Badge className={statusColors[task.status]}>
                          {task.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TaskView;
