export interface Service  {
  id: string;
  name: string;
  description: string;
  price: number;
};

export type ServiceState = {
  [key: string]: boolean;
};

export interface HandleChangeEvent {
  target: {
  name: string;
  checked: boolean;
  };
}

export interface ServiceItemProps {
  service: {
    id: string;
    name: string;
    description: string;
    price: number;
  };
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPages?: (value: number) => void;
  setLanguages?: (value: number) => void;
  pages: number;
  languages: number;
}

export interface WebConfigProps {
  pages: number;
  languages: number;
  onPagesChange: (value: number) => void;
  onLanguagesChange: (value: number) => void;
}

export interface CounterProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
}
