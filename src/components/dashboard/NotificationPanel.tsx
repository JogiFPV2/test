import React from 'react';
import { Bell, MessageCircle, Calendar, Clock } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface NotificationItem {
  id: string;
  type: 'task' | 'message';
  title: string;
  description: string;
  time: string;
  isRead: boolean;
}

interface NotificationPanelProps {
  notifications?: NotificationItem[];
  onNotificationClick?: (id: string) => void;
}

const NotificationPanel = ({
  notifications = [
    {
      id: '1',
      type: 'task',
      title: 'Documentation Due',
      description: 'Complete service documentation for Johnson Memorial',
      time: '2 hours ago',
      isRead: false,
    },
    {
      id: '2',
      type: 'message',
      title: 'Family Message',
      description: 'New message from Smith family regarding service arrangements',
      time: '3 hours ago',
      isRead: true,
    },
    {
      id: '3',
      type: 'task',
      title: 'Venue Setup',
      description: 'Confirm chapel arrangement for tomorrow's service',
      time: '5 hours ago',
      isRead: false,
    }
  ],
  onNotificationClick = () => {},
}: NotificationPanelProps) => {
  return (
    <Card className="w-[400px] h-[500px] bg-white">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Notifications</CardTitle>
          <Badge variant="secondary" className="bg-gray-100">
            {notifications.filter(n => !n.isRead).length} new
          </Badge>
        </div>
      </CardHeader>
      <ScrollArea className="h-[420px] px-4">
        {notifications.map((notification, index) => (
          <React.Fragment key={notification.id}>
            <div
              className={`py-4 cursor-pointer transition-colors hover:bg-gray-50 ${
                !notification.isRead ? 'bg-blue-50' : ''
              }`}
              onClick={() => onNotificationClick(notification.id)}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  {notification.type === 'task' ? (
                    <Calendar className="h-5 w-5 text-blue-600" />
                  ) : (
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">{notification.title}</h4>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {notification.time}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {notification.description}
                  </p>
                </div>
              </div>
            </div>
            {index < notifications.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </ScrollArea>
    </Card>
  );
};

export default NotificationPanel;