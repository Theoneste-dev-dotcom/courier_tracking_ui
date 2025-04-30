import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Plus, Check, User } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { UserDetails } from '@/types/shipment';
import { searchReceivers } from '@/components/services/receiverService';

interface ReceiverSelectorProps {
  onSelect: (receiver: UserDetails, isNew: boolean) => void;
}

const ReceiverSelector: React.FC<ReceiverSelectorProps> = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<UserDetails[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showNewForm, setShowNewForm] = useState(false);
  const [selectedReceiver, setSelectedReceiver] = useState<UserDetails | null>(null);
  const [newReceiver, setNewReceiver] = useState<UserDetails>({
    name: '',
    email: '',
    phone: 0,
    location_name: '',
  });

  const handleSearch = async () => {
    if (searchTerm.trim().length < 2) return;
    
    setIsSearching(true);
    try {
      const results = await searchReceivers(searchTerm);
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching receivers:", error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSelectReceiver = (receiver: UserDetails) => {
    setSelectedReceiver(receiver);
    setShowNewForm(false);
    onSelect(receiver, false);
  };

  const handleCreateNewReceiver = () => {
    if (newReceiver.name && newReceiver.email && newReceiver.phone) {
      setSelectedReceiver(null);
      onSelect(newReceiver, true);
    }
  };

  const handleNewReceiverChange = (field: keyof UserDetails, value: string | number) => {
    setNewReceiver(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-4">
      {!showNewForm && !selectedReceiver && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1  text-base-content"
            />
            <Button type="button" onClick={handleSearch} disabled={isSearching}>
              <Search className="h-4 w-4  text-base-content" />
            </Button>
          </div>
          
          {isSearching ? (
            <div className="py-4 text-center  text-base-content">Searching...</div>
          ) : searchResults.length > 0 ? (
            <div className="max-h-[250px] overflow-y-auto space-y-2">
              {searchResults.map((receiver) => (
                <Card 
                  key={receiver.email} 
                  className="cursor-pointer hover:bg-accent  text-base-content"
                  onClick={() => handleSelectReceiver(receiver)}
                >
                  <CardContent className="p-3 flex items-center justify-between">
                    <div>
                      <p className="font-medium  text-base-content">{receiver.name}</p>
                      <p className="text-sm text-muted-foreground  text-base-content">{receiver.email}</p>
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
              <p className="mb-2  text-base-content">No receivers found with that name or email</p>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowNewForm(true)}
                className="gap-2 text-base-content"
              >
                <Plus className="h-4 w-4 text-base-content" /> Add New Receiver
              </Button>
            </div>
          ) : null}
          
          {!searchTerm && (
            <div className="p-4 border border-dashed rounded-md text-center">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowNewForm(true)}
                className="gap-2"
              >
                <Plus className="h-4 w-4" /> Add New Receiver
              </Button>
            </div>
          )}
        </div>
      )}
      
      {showNewForm && (
        <div className="space-y-4 border p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h4 className="font-medium flex items-center gap-2 text-base-content">
              <User className="h-4 w-4" /> New Receiver Information
            </h4>
            <Button 
              type="button" 
              variant="ghost" 
              size="sm" 
              className=''
              onClick={() => setShowNewForm(false)}
            >
              Cancel
            </Button>
          </div>
          
          <div className="space-y-3">
            <div>
              <Label htmlFor="receiver-name" className='text-base-content'>Name</Label>
              <Input
                id="receiver-name"
                value={newReceiver.name}
                onChange={(e) => handleNewReceiverChange('name', e.target.value)}
                placeholder="Full Name"
                className=' text-base-content'
              />
            </div>
            <div>
              <Label htmlFor="receiver-email" className='text-base-content'>Email</Label>
              <Input
                id="receiver-email"
                type="email"
                value={newReceiver.email}
                onChange={(e) => handleNewReceiverChange('email', e.target.value)}
                placeholder="email@example.com"
                className=' text-base-content'
              />
            </div>
            <div>
              <Label htmlFor="receiver-phone " className='text-base-content'>Phone Number</Label>
              <Input
                id="receiver-phone"
                type="tel"
                value={newReceiver.phone || ''}
                onChange={(e) => handleNewReceiverChange('phone', parseFloat(e.target.value) || 0)}
                placeholder="Phone Number"
                className='text-base-content'
              />
            </div>
            <div>
              <Label htmlFor="receiver-location " className='text-base-content'>Location Name</Label>
              <Input
                id="receiver-location"
                value={newReceiver.location_name}
                onChange={(e) => handleNewReceiverChange('location_name', e.target.value)}
                placeholder="Home, Office, etc."
                className=' text-base-content'
              />
            </div>
            
            <Button
              type="button"
              onClick={handleCreateNewReceiver}
              className="w-full gap-2 "
              disabled={!newReceiver.name || !newReceiver.email || !newReceiver.phone}
            >
              <Check className="h-4 w-4 text-white " /> Add Receiver
            </Button>
          </div>
        </div>
      )}
      
      {selectedReceiver && (
        <div className="p-4 border rounded-md bg-accent/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-base-content">{selectedReceiver.name}</p>
              <p className="text-sm text-muted-foreground text-base-content">{selectedReceiver.email}</p>
              <p className="text-sm text-muted-foreground text-base-content">{selectedReceiver.phone}</p>
            </div>
            <Button 
              type="button" 
              variant="ghost" 
              onClick={() => {
                setSelectedReceiver(null);
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

export default ReceiverSelector;
