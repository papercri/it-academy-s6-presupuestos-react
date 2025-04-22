import { Service } from "../types/Service";

type ServiceItemsProps = {
  service: Service;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ServiceItem({ service, checked, onChange }: ServiceItemsProps) {
  return (
    <div className="flex items-center justify-between gap-2 bg-white p-6 rounded-xl shadow-md">
      <div className="grid grid-cols-3 text-gray-800 gap-4  items-center">
        <label htmlFor={service.id} className="flex flex-col gap-1 cursor-pointer col-span-2">
          <span className="text-xl font-bold ">{service.name}</span>
          <span className="text-sm text-gray-600">{service.description}</span>
        </label>
        <span className="text-2xl font-bold">{service.price} €</span>
      </div>
      <div className="flex items-center gap-1">
        <input
          type="checkbox"
          id={service.id}
          name={service.id}
          checked={checked}
          onChange={onChange}
          className="form-checkbox "
        />
        <span className="text-gray-800 text-sm">Select</span>
      </div>
    </div>
  );
}
