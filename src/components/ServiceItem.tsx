import ServiceItemDetail from "./ServiceItemDetail";  

interface ServiceItemProps {
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

const ServiceItem: React.FC<ServiceItemProps> = ({ 
  service, 
  checked, 
  onChange,
  setPages,
  setLanguages,
  pages,
  languages
 }) => {

  return (
    <div className="flex flex-col gap-2 bg-white p-6 rounded-xl shadow-md">
      <div>
        <div className="grid grid-cols-5 text-gray-800 gap-4  items-center justify-items-stretch ">
          <label htmlFor={service.id} className="flex flex-col gap-1 cursor-pointer col-span-3">
            <span className="text-xl font-bold ">
              {service.name}
            </span>
            <span className="text-sm text-gray-600">
              {service.description}
            </span>
          </label>
          <span className="text-2xl font-bold text-right">
            {service.price} €
          </span>
          <input
            type="checkbox"
            id={service.id}
            name={service.id}
            checked={checked}
            onChange={onChange}
            className="form-checkbox justify-self-end"
          />
        </div>
      </div>
      {checked && service.id === "web" && setPages && setLanguages && (
        <ServiceItemDetail
          pages={pages}
          languages={languages}
          onPagesChange={setPages}
          onLanguagesChange={setLanguages}
        />
      )}
     
    </div>
  );
}


export default ServiceItem;
