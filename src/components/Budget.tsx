import { useEffect, useState } from "react";
import { services } from "../data/services";
import { ServiceState } from "../types/Service";
import ServiceItem from "./ServiceItem";

function Budget() {
    const [selected, setSelected] = useState<ServiceState>({
      seo: false,
      ads: false,
      web: false,
    });

    const [total, setTotal] = useState(0);


    useEffect(() => {
      const newTotal = services.reduce((sum, service) => {
        return selected[service.id] ? sum + service.price : sum;
      }, 0);
      setTotal(newTotal);
    }, [selected]);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = e.target;
      setSelected((prev) => ({
        ...prev,
        [name]: checked,
      }));
    };

    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <form className="space-y-3">
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              checked={selected[service.id]}
              onChange={handleChange}
            />
          ))}
        </form>
        <div className="mt-6 text-xl font-semibold text-selected text-right">
          Total price: {total} €
        </div>
      </div>
    </div>
      );
    }


export default Budget;