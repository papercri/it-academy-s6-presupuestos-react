export interface Service  {
    id: string;
    name: string;
    description: string;
    price: number;
  };

export type ServiceState = {
  [key: string]: boolean;
};