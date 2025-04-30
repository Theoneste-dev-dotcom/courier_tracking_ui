import { LocationType } from "@/types/shipment";

// Mock location search results
const mockLocations: Record<string, LocationType[]> = {
  "new york": [
    {
      longitude: -74.0060,
      latitude: 40.7128,
      placeName: "New York City, NY"
    },
    {
      longitude: -73.9866,
      latitude: 40.7306,
      placeName: "New York University, NY"
    }
  ],
  "san francisco": [
    {
      longitude: -122.4194,
      latitude: 37.7749,
      placeName: "San Francisco, CA"
    },
    {
      longitude: -122.4089,
      latitude: 37.7855,
      placeName: "San Francisco Financial District, CA"
    }
  ],
  "los angeles": [
    {
      longitude: -118.2437,
      latitude: 34.0522,
      placeName: "Los Angeles, CA"
    },
    {
      longitude: -118.4085,
      latitude: 33.9416,
      placeName: "Los Angeles International Airport (LAX), CA"
    }
  ],
  "chicago": [
    {
      longitude: -87.6298,
      latitude: 41.8781,
      placeName: "Chicago, IL"
    },
    {
      longitude: -87.6240,
      latitude: 41.8902,
      placeName: "Chicago Riverwalk, IL"
    }
  ]
};

// Function to get a random offset for coordinates to simulate different locations
const getRandomOffset = () => (Math.random() - 0.5) * 0.05;

// Service function to search locations
export const searchLocations = async (searchTerm: string, isCoords = false): Promise<LocationType[]> => {
  // In a real app, this would use a geocoding API like Mapbox, Google Maps, etc.
  return new Promise((resolve) => {
    setTimeout(() => {
      if (isCoords) {
        // Parse as lat,lng
        try {
          const [lat, lng] = searchTerm.split(',').map(Number);
          // Reverse geocode (mock)
          resolve([{
            latitude: lat,
            longitude: lng,
            placeName: `Location at ${lat.toFixed(4)}, ${lng.toFixed(4)}`
          }]);
          return;
        } catch (e) {
          console.error("Failed to parse coordinates:", e);
        }
      }

      const normalizedSearchTerm = searchTerm.toLowerCase();
      
      // Check if we have mock data for this search term
      for (const [key, locations] of Object.entries(mockLocations)) {
        if (key.includes(normalizedSearchTerm)) {
          // Add some randomness to make results appear different each time
          const results = locations.map(loc => ({
            ...loc,
            latitude: loc.latitude + getRandomOffset(),
            longitude: loc.longitude + getRandomOffset()
          }));
          resolve(results);
          return;
        }
      }
      
      // If no matching key, return a generic result
      resolve([
        {
          longitude: -98.5795 + getRandomOffset(),
          latitude: 39.8283 + getRandomOffset(),
          placeName: `${searchTerm} (Approximate location)`
        }
      ]);
    }, 600);
  });
};
