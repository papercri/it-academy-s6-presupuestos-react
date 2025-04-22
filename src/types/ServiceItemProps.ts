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