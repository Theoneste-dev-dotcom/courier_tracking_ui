import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

type Notification = {
  id: number;
  type: string;
  message: string;
  seen: boolean;
  createdAt: string;
};

type NotificationBodyRightDrawerProps = {
  closeRightDrawer: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  notifications:Notification[];
};

const NotificationBodyRightDrawer: React.FC<
  NotificationBodyRightDrawerProps
> = ({ closeRightDrawer, notifications }) => {
 
  const dispatch = useDispatch();
  const companyId = localStorage.getItem("current-company-id");
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    if(notifications){
      console.log(notifications)
    }else {
      console.log("why no notifs")
    }
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateFormatted = date.toLocaleDateString();
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    return { time, date: dateFormatted, day };
  };

  return (
    <div className="h-full pt-4 overflow-y-auto ">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
        </div>
      ) : notifications.length === 0 ? (
        <div className="text-center text-gray-500 mt-8">
          No notifications available
        </div>
      ) : (
        notifications.map((notification) => {
          const { time, date, day } = formatDate(notification.createdAt);
          return (
            <div
              key={notification.id}
              className={`mb-4 p-4 rounded-lg shadow-md transition-all duration-200 ${
                notification.seen
                  ? 'bg-gray-100'
                  : 'bg-teal-100 border-l-4 border-teal-500'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {notification.message}
                  </p>
                  <div className="mt-2 text-xs text-gray-500">
                    <span>{day}, </span>
                    <span>{date} </span>
                    <span>at {time}</span>
                  </div>
                </div>
                {!notification.seen && (
                  <span className="h-2 w-2 bg-teal-500 rounded-full"></span>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default NotificationBodyRightDrawer;