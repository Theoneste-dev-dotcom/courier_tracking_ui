import { UserDetails } from "@/types/shipment";

// Mock database of receivers
const mockReceivers: UserDetails[] = [
  {
    id: 1,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: 4155551234,
    location_name: "Home Office"
  },
  {
    id: 2,
    name: "Robert Johnson",
    email: "robert.j@example.com",
    phone: 2125557890,
    location_name: "Business HQ"
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: 3235559876,
    location_name: "Apartment 5B"
  }
];

// Service function to search receivers
export const searchReceivers = async (searchTerm: string): Promise<UserDetails[]> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const normalizedSearchTerm = searchTerm.toLowerCase();
      const results = mockReceivers.filter(
        receiver => 
          receiver.name.toLowerCase().includes(normalizedSearchTerm) || 
          receiver.email.toLowerCase().includes(normalizedSearchTerm)
      );
      resolve(results);
    }, 500);
  });
};

// Service function to get a receiver by ID
export const getReceiverById = async (id: number): Promise<UserDetails | null> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const receiver = mockReceivers.find(r => r.id === id);
      resolve(receiver || null);
    }, 200);
  });
};
