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

