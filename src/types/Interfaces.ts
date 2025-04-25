export interface Service  {
  id: string;
  name: string;
  description: string;
  price: number;
};
export type ServiceState = {
  [key: string]: boolean;
};
export interface Budget {
  id: number;
  client: string;
  email: string;
  services: ServiceState;
  total: number;
};

export interface SaveBudgetParams  {
  e: React.FormEvent;
  clientName: string;
  clientEmail: string;
  selectedServices: ServiceState;
  total: number;
  budgets: Budget[];
  setBudgets: (budgets: Budget[]) => void;
  setClientName: (name: string) => void;
  setClientEmail: (email: string) => void;
  setPages: (pages: number) => void;
  setLanguages: (languages: number) => void;
  pages: number;
  languages: number;
  setSelectedServices: (services: ServiceState) => void;
  setErrors: (errors: {
    name?: string;
    email?: string;
    services?: string;
  }) => void;
  isDiscountApplied: boolean;
  webPrice: number;    
}
  
