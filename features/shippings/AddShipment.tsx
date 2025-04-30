
import React, { useState } from "react"
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { UserDetails, LocationType, CompanyDetails } from "@/types/shipment";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Map, Package, Truck, User, Check, Search, Plus, ArrowRight, Save, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/text-area";
import { useForm } from "react-hook-form";
import ReceiverSelector from "@/components/ReceiverSelector";
import CompanySelector from "@/components/CompanySelector";
import LocationSelector from "@/components/LocationSelector";
import { getAvailableCompanies } from "@/components/services/companyService";

interface AddShipmentFormValues {
  name: string;
  weight: number;
  receiverId?: number;
  receiverIsNew: boolean;
  receiverDetails?: UserDetails;
  companyId?: number;
  origin: LocationType;
  destination: LocationType;
  notes?: string;
}

const AddShipment: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [availableCompanies, setAvailableCompanies] = useState<CompanyDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedCompany, setSelectedCompany] = useState<CompanyDetails | null>(null);
  const [isNewReceiver, setIsNewReceiver] = useState<boolean>(false);
  
  const form = useForm<AddShipmentFormValues>({
    defaultValues: {
      name: "",
      weight: 0,
      receiverIsNew: false,
      origin: { longitude: 0, latitude: 0, placeName: "" },
      destination: { longitude: 0, latitude: 0, placeName: "" },
    },
  });

  // Fetch available companies on mount
  React.useEffect(() => {
    const fetchCompanies = async () => {
      setIsLoading(true);
      try {
        const companies = await getAvailableCompanies();
        setAvailableCompanies(companies);
      } catch (error) {
        console.error("Failed to fetch companies:", error);
        toast.error("Failed to load available companies.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchCompanies();
  }, []);

  const onSubmit = (data: AddShipmentFormValues) => {
    setIsLoading(true);
    
    try {
      // In a real app, this would send data to your API
      console.log("Shipment data to submit:", data);
      
      // Mock successful submission
      setTimeout(() => {
        toast.success("Shipment request created successfully!");
        router.push("/shipments/{shipmentId}"); // Redirect to shipment status page
      }, 1000);
    } catch (error) {
      console.error("Error creating shipment:", error);
      toast.error("Failed to create shipment request.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompanySelect = (company: CompanyDetails) => {
    setSelectedCompany(company);
    form.setValue("companyId", company.id as number);
  };

  const handleReceiverSelect = (receiver: UserDetails, isNew: boolean) => {
    setIsNewReceiver(isNew);
    form.setValue("receiverIsNew", isNew);
    
    if (isNew) {
      form.setValue("receiverDetails", receiver);
    } else {
      form.setValue("receiverId", receiver.id as number);
    }
  };

  const handleLocationSelect = (type: 'origin' | 'destination', location: LocationType) => {
    form.setValue(type, location);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Create New Shipment</h1>
        
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((stepNumber) => (
              <div 
                key={stepNumber} 
                className={`flex items-center ${stepNumber < step ? 'text-teal-600' : stepNumber === step ? 'text-foreground' : 'text-muted-foreground'}`}
              >
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center mr-2 
                  ${stepNumber < step ? 'bg-teal-600 text-white' : stepNumber === step ? 'border-2 border-teal-600' : 'border-2 border-muted'}`}
                >
                  {stepNumber < step ? <Check className="h-5 w-5" /> : stepNumber}
                </div>
                <span className={`hidden md:inline ${stepNumber <= step ? 'font-medium' : 'font-normal'}`}>
                  {stepNumber === 1 ? 'Shipment Details' : stepNumber === 2 ? 'Locations' : 'Review & Submit'}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 h-1 w-full bg-muted">
            <div 
              className="h-full bg-teal-600 transition-all duration-300" 
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {step === 1 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" /> Shipment Details
                  </CardTitle>
                  <CardDescription>Enter basic information about your shipment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Shipment Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Home Furniture" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Weight (kg)</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" step="0.1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-4">
                    <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                      <Truck className="h-5 w-5" /> Select Transport Company
                    </h3>
                    <CompanySelector 
                      companies={availableCompanies}
                      onSelect={handleCompanySelect}
                      isLoading={isLoading}
                    />
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                      <User className="h-5 w-5" /> Receiver Information
                    </h3>
                    <ReceiverSelector onSelect={handleReceiverSelect} />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button 
                    onClick={nextStep} 
                    type="button" 
                    className="gap-2"
                    disabled={!form.watch("name") || !selectedCompany || form.watch("weight") <= 0}
                  >
                    Next <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}
            
            {step === 2 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Map className="h-5 w-5" /> Origin & Destination
                  </CardTitle>
                  <CardDescription>Select the pickup and delivery locations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                      <MapPin className="h-5 w-5" /> Origin Location
                    </h3>
                    <LocationSelector 
                      type="origin" 
                      onSelect={(location) => handleLocationSelect('origin', location)}
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                      <MapPin className="h-5 w-5" /> Destination Location
                    </h3>
                    <LocationSelector 
                      type="destination" 
                      onSelect={(location) => handleLocationSelect('destination', location)}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Add any special instructions or notes for the shipment..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Optional: Include any specific details about handling, access requirements, etc.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={prevStep} type="button">
                    Back
                  </Button>
                  <Button 
                    onClick={nextStep} 
                    type="button" 
                    className="gap-2"
                    disabled={!form.watch("origin").placeName || !form.watch("destination").placeName}
                  >
                    Next <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}
            
            {step === 3 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-5 w-5" /> Review & Submit
                  </CardTitle>
                  <CardDescription>Verify your shipment details before submitting</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-medium text-muted-foreground">Shipment Details</h3>
                      <p><span className="font-medium">Name:</span> {form.watch("name")}</p>
                      <p><span className="font-medium">Weight:</span> {form.watch("weight")} kg</p>
                      <p><span className="font-medium">Company:</span> {selectedCompany?.name}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-medium text-muted-foreground">Locations</h3>
                      <p><span className="font-medium">Origin:</span> {form.watch("origin").placeName}</p>
                      <p><span className="font-medium">Destination:</span> {form.watch("destination").placeName}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mt-4">
                    <h3 className="font-medium text-muted-foreground">Receiver</h3>
                    {isNewReceiver ? (
                      <>
                        <p><span className="font-medium">Name:</span> {form.watch("receiverDetails")?.name}</p>
                        <p><span className="font-medium">Email:</span> {form.watch("receiverDetails")?.email}</p>
                        <p><span className="font-medium">Phone:</span> {form.watch("receiverDetails")?.phone}</p>
                        <p><span className="font-medium">Location:</span> {form.watch("receiverDetails")?.location_name}</p>
                      </>
                    ) : (
                      <p>Using existing receiver (ID: {form.watch("receiverId")})</p>
                    )}
                  </div>
                  
                  {form.watch("notes") && (
                    <div className="space-y-3 mt-4">
                      <h3 className="font-medium text-muted-foreground">Notes</h3>
                      <p>{form.watch("notes")}</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={prevStep} type="button">
                    Back
                  </Button>
                  <Button type="submit" disabled={isLoading} className="gap-2">
                    {isLoading ? "Creating..." : (
                      <>
                        Submit Shipment <Save className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddShipment;