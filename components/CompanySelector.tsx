import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CompanyDetails } from '@/types/shipment';
import { Truck, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface CompanySelectorProps {
  companies: CompanyDetails[];
  onSelect: (company: CompanyDetails) => void;
  isLoading: boolean;
  selectedCompanyId?: number;
}

const CompanySelector: React.FC<CompanySelectorProps> = ({ 
  companies, 
  onSelect,
  isLoading,
  selectedCompanyId
}) => {
  if (isLoading) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        Loading available companies...
      </div>
    );
  }

  if (companies.length === 0) {
    return (
      <div className="p-8 text-center border border-dashed rounded-md">
        <p className="text-muted-foreground">No transport companies available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {companies.map((company) => (
        <Card 
          key={company.id || company.name}
          className={`cursor-pointer transition-all hover:border-teal-600 ${
            selectedCompanyId === company.id ? 'border-2 border-teal-600' : ''
          }`}
          onClick={() => onSelect(company)}
        >
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {company.logo ? (
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="h-10 w-10 object-contain"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-teal-600 flex items-center justify-center text-white">
                  <Truck className="h-6 w-6" />
                </div>
              )}
              <div>
                <p className="font-medium">{company.name}</p>
                {company.email && <p className="text-xs text-muted-foreground">{company.email}</p>}
              </div>
            </div>
            {selectedCompanyId === company.id && (
              <Button size="sm" variant="ghost" className="px-0 text-teal-600">
                <Check className="h-5 w-5" />
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CompanySelector;
