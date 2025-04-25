// filepath: b:/package_trackv2/final_ui/types/react-notifications.d.ts
declare module 'react-notifications' {
    export const NotificationContainer: React.ComponentType;
    export const NotificationManager: {
      success: (message: string, title?: string, timeout?: number, callback?: () => void) => void;
      error: (message: string, title?: string, timeout?: number, callback?: () => void) => void;
      info: (message: string, title?: string, timeout?: number, callback?: () => void) => void;
      warning: (message: string, title?: string, timeout?: number, callback?: () => void) => void;
    };
  }