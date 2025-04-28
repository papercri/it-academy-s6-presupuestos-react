import ServiceItemDetail from "./ServiceItemDetail";
import { Tooltip } from 'react-tooltip'

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
  discount: boolean;
  webPrice: number; 
}

const ServiceItem: React.FC<ServiceItemProps> = ({ 
  service, 
  checked, 
  onChange,
  setPages,
  setLanguages,
  pages,
  languages,
  discount,
  webPrice
 }) => {

  return (
    <div className="card flex flex-col gap-2 bg-white p-6 rounded-xl shadow-md">
      <div>
        <div className="grid grid-cols-4 text-gray-800 gap-4  items-center justify-items-stretch ">
          <label htmlFor={service.id} className="flex flex-col gap-1 cursor-pointer col-span-2">

            <span className="text-xl font-bold mb-2">
              {service.name} 
            </span>
            <span className="text-sm text-gray-600">
              {service.description}
            </span>
          </label>

        {service.id === "web" ? (
          <span className="text-xl font-bold text-right">
            {discount && <p className=" text-orange-600 font-bold text-xs mb-2 text-center text-nowrap">Save 20%</p>}
            {!discount && <span className=" text-2xl font-bold">{webPrice} €</span>}
            {discount && <span>
                <span className="line-through text-gray-600 mr-2">{service.price}€</span>
                <span className=" text-2xl font-bold"> {(webPrice * 0.8).toFixed(0)}€ </span>
                </span>
            }
          </span>

        ) : (

          <span className="text-xl font-bold text-center">
            {discount && <p className=" text-orange-600 font-bold text-xs mb-2 text-center text-nowrap">Save 20%</p>}
            {!discount && <span className=" text-2xl font-bold">{service.price}€</span>}
            {discount && <span>
                <span className="line-through text-gray-600 mr-2">{service.price}€</span>
                <span className=" text-2xl font-bold"> {(service.price * 0.8).toFixed(0)}€ </span>
                </span>
            }
          </span>
        )}

          <input
            type="checkbox"
            id={service.id}
            name={service.id}
            checked={checked}
            onChange={onChange}
            className="form-checkbox justify-self-end"
            data-tooltip-id="tooltip" data-tooltip-content="Select service"
          />
          <Tooltip id="tooltip" />
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
