import React from "react";
import { CompanyDetails } from "../types/shipment";
import { Card } from "@/components/ui/card";
import { Truck } from "lucide-react";

interface CompanyBannerProps {
  companyDetails: CompanyDetails;
}

const CompanyBanner = ({ companyDetails }: CompanyBannerProps) => {
  return (
    <Card className="border border-border overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center gap-3">
          {companyDetails.logo ? (
            <img 
              src={companyDetails.logo} 
              alt={`${companyDetails.name} logo`} 
              className="h-10 w-10 object-contain"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-teal-600 flex items-center justify-center text-white">
              <Truck className="h-6 w-6" />
            </div>
          )}
          <div>
            <h3 className="font-medium text-foreground">{companyDetails.name}</h3>
            <p className="text-sm text-muted-foreground">Transport Provider</p>
          </div>
        </div>
        
        <div className="text-right">
          {companyDetails.phone && (
            <p className="text-sm text-muted-foreground">{companyDetails.phone}</p>
          )}
          {companyDetails.email && (
            <p className="text-sm text-muted-foreground">{companyDetails.email}</p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CompanyBanner;
