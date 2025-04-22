import WebConfig from "./WebConfig";  
import { ServiceItemProps} from "../types/Interfaces";

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
      <div className="flex flex-row items-center justify-between">
        <div className="grid grid-cols-3 text-gray-800 gap-4  items-center">
          <label htmlFor={service.id} className="flex flex-col gap-1 cursor-pointer col-span-2">
            <span className="text-xl font-bold ">
              {service.name}
            </span>
            <span className="text-sm text-gray-600">
              {service.description}
            </span>
          </label>
          <span className="text-2xl font-bold">
            {service.price} €
          </span>
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
      {checked && service.id === "web" && setPages && setLanguages && (
        <WebConfig
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
