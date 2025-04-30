import { Shipment, ShipmentUpdate, ShipmentLog, CompanyDetails } from "../types/shipment";

// Mock shipment updates representing the journey of a package
const mockShipmentUpdates: ShipmentUpdate[] = [
  {
    id: 1,
    status: "Order Placed",
    description: "Your order has been confirmed and is being processed",
    location: {
      longitude: -122.4194,
      latitude: 37.7749,
      placeName: "San Francisco, CA"
    },
    timestamp: new Date("2025-04-25T08:30:00")
  },
  {
    id: 2,
    status: "Package Picked Up",
    description: "Your package has been picked up by our courier",
    location: {
      longitude: -122.4194,
      latitude: 37.7749,
      placeName: "San Francisco Sorting Center"
    },
    timestamp: new Date("2025-04-26T10:15:00")
  },
  {
    id: 3,
    status: "In Transit",
    description: "Your package is on its way to the destination",
    location: {
      longitude: -119.4179,
      latitude: 36.7783,
      placeName: "Fresno Distribution Center"
    },
    timestamp: new Date("2025-04-27T14:45:00")
  },
  {
    id: 4,
    status: "Out for Delivery",
    description: "Your package is out for delivery today",
    location: {
      longitude: -118.2437,
      latitude: 34.0522,
      placeName: "Los Angeles Delivery Station"
    },
    timestamp: new Date("2025-04-28T09:20:00")
  }
];

// Mock company details
const mockCompanyDetails: CompanyDetails = {
  name: "Swift Logistics",
  email: "support@swiftlogistics.com",
  phone: 8005551234
};

// Mock shipment logs
const mockShipmentLogs: ShipmentLog[] = [
  {
    id: 1,
    message: "Shipment created",
    timestamp: new Date("2025-04-25T08:30:00"),
    type: "info"
  },
  {
    id: 2,
    message: "Package picked up from sender",
    timestamp: new Date("2025-04-26T10:15:00"),
    type: "success"
  },
  {
    id: 3,
    message: "Package arrived at sorting center",
    timestamp: new Date("2025-04-26T14:30:00"),
    type: "info"
  },
  {
    id: 4,
    message: "Shipment delayed due to weather conditions",
    timestamp: new Date("2025-04-27T09:45:00"),
    type: "warning"
  },
  {
    id: 5,
    message: "Shipment in transit to destination",
    timestamp: new Date("2025-04-27T14:45:00"),
    type: "info"
  },
  {
    id: 6,
    message: "Package arrived at local delivery station",
    timestamp: new Date("2025-04-28T07:30:00"),
    type: "info"
  },
  {
    id: 7,
    message: "Out for delivery",
    timestamp: new Date("2025-04-28T09:20:00"),
    type: "info"
  }
];

// Mock shipment data
export const mockShipment: Shipment = {
  id: 123456,
  name: "Tech Equipment Delivery",
  status: "In Transit",
  trackingNumber: "PV-78945612",
  weight: 8.5,
  expectedDeliveryDate: new Date("2025-04-30T17:00:00"),
  createdAt: new Date("2025-04-25T08:30:00"),
  origin: {
    longitude: -122.4194,
    latitude: 37.7749,
    placeName: "San Francisco, CA"
  },
  destination: {
    longitude: -118.2437,
    latitude: 34.0522,
    placeName: "Los Angeles, CA"
  },
  senderDetails: {
    name: "John Smith",
    email: "john.smith@example.com",
    phone: 4155551234,
    location_name: "Tech Innovations Inc."
  },
  receiverDetails: {
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    phone: 2135557890,
    location_name: "Digital Solutions LLC"
  },
  shipmentUpdate: mockShipmentUpdates[2], // Current status is "In Transit"
  companyDetails: mockCompanyDetails
};

// Service function to get shipment data
export const getShipment = async (id: number): Promise<Shipment> => {
  // In a real application, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockShipment), 500);
  });
};

// Service function to get all updates for a shipment
export const getShipmentUpdates = async (shipmentId: number): Promise<ShipmentUpdate[]> => {
  // In a real application, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockShipmentUpdates), 500);
  });
};

// Service function to get all logs for a shipment
export const getShipmentLogs = async (shipmentId: number): Promise<ShipmentLog[]> => {
  // In a real application, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockShipmentLogs), 500);
  });
};

// Calculate estimated percentage of journey completed
export const calculateDeliveryProgress = (updates: ShipmentUpdate[]): number => {
  // Simple calculation based on number of updates completed
  // In a real app, this might be more sophisticated based on distance/time
  const totalSteps = 5; // Order placed, picked up, in transit, out for delivery, delivered
  const completedSteps = updates.length;
  return Math.min((completedSteps / totalSteps) * 100, 80); // Cap at 80% until delivered
};
