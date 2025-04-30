import { CompanyDetails } from "@/types/shipment";

// Mock companies
const mockCompanies: CompanyDetails[] = [
  {
    id: 1,
    name: "Swift Logistics",
    email: "support@swiftlogistics.com",
    phone: 8005551234
  },
  {
    id: 2,
    name: "FastTrack Shipping",
    email: "info@fasttrackshipping.com",
    phone: 8775559876
  },
  {
    id: 3,
    name: "Global Express",
    email: "service@globalexpress.com",
    phone: 8885552345
  },
  {
    id: 4,
    name: "City Couriers",
    email: "dispatch@citycouriers.com",
    phone: 8665554567
  }
];

// Service function to get all available companies
export const getAvailableCompanies = async (): Promise<CompanyDetails[]> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockCompanies), 800);
  });
};

// Service function to get company by ID
export const getCompanyById = async (id: number): Promise<CompanyDetails | null> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const company = mockCompanies.find(c => c.id === id);
      resolve(company || null);
    }, 300);
  });
};
