import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/Button';
import { LocationType } from '@/types/shipment';
import { Search, MapPin, Check } from 'lucide-react';
import { searchLocations } from '@/components/services/locationService';

interface LocationSelectorProps {
  type: 'origin' | 'destination';
  onSelect: (location: LocationType) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({ type, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<LocationType[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(null);
  
  // User's current location
  const [userLocation, setUserLocation] = useState<LocationType | null>(null);
  const [loadingUserLocation, setLoadingUserLocation] = useState(false);

  useEffect(() => {
    if (type === 'origin') {
      // Only try to get user's location for origin
      getUserCurrentLocation();
    }
  }, [type]);

  const getUserCurrentLocation = () => {
    if (navigator.geolocation) {
      setLoadingUserLocation(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            // Reverse geocode to get place name
            const locationInfo = await searchLocations(`${latitude},${longitude}`, true);
            if (locationInfo.length > 0) {
              setUserLocation(locationInfo[0]);
            }
          } catch (error) {
            console.error("Error getting location details:", error);
          } finally {
            setLoadingUserLocation(false);
          }
        },
        (error) => {
          console.error("Error getting user location:", error);
          setLoadingUserLocation(false);
        }
      );
    }
  };

  const handleSearch = async () => {
    if (searchTerm.trim().length < 2) return;
    
    setIsSearching(true);
    try {
      const results = await searchLocations(searchTerm);
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching locations:", error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSelectLocation = (location: LocationType) => {
    setSelectedLocation(location);
    onSelect(location);
    setSearchResults([]);
  };

  const handleUseCurrentLocation = () => {
    if (userLocation) {
      handleSelectLocation(userLocation);
    }
  };

  return (
    <div className="space-y-4">
      {!selectedLocation ? (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search for address or location"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Button type="button" onClick={handleSearch} disabled={isSearching}>
              <Search className="h-4 w-4" />
            </Button>
          </div>
          
          {type === 'origin' && (
            <Button
              type="button"
              variant="outline"
              className="w-full gap-2"
              onClick={handleUseCurrentLocation}
              disabled={loadingUserLocation || !userLocation}
            >
              <MapPin className="h-4 w-4" />
              {loadingUserLocation ? "Getting your location..." : "Use my current location"}
            </Button>
          )}
          
          {isSearching ? (
            <div className="py-4 text-center">Searching locations...</div>
          ) : searchResults.length > 0 ? (
            <div className="max-h-[250px] overflow-y-auto space-y-2">
              {searchResults.map((location, index) => (
                <Card 
                  key={`${location.latitude}-${location.longitude}-${index}`} 
                  className="cursor-pointer hover:bg-accent"
                  onClick={() => handleSelectLocation(location)}
                >
                  <CardContent className="p-3 flex items-center justify-between">
                    <div>
                      <p className="font-medium">{location.placeName}</p>
                      <p className="text-xs text-muted-foreground">
                        Lat: {location.latitude.toFixed(4)}, Lng: {location.longitude.toFixed(4)}
                      </p>
                    </div>
                    <Button type="button" variant="ghost" size="sm">
                      <Check className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : searchTerm && !isSearching ? (
            <div className="py-4 text-center">
              <p>No locations found with that search term</p>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="p-4 border rounded-md bg-accent/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">{selectedLocation.placeName}</p>
              <p className="text-xs text-muted-foreground">
                Lat: {selectedLocation.latitude.toFixed(4)}, Lng: {selectedLocation.longitude.toFixed(4)}
              </p>
            </div>
            <Button 
              type="button" 
              variant="ghost" 
              onClick={() => {
                setSelectedLocation(null);
                setSearchTerm('');
              }}
            >
              Change
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
