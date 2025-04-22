import { useEffect, useState } from "react";
import { services } from "../data/services";
import { ServiceState } from "../types/Service";
  

function Budget() {
    const [selected, setSelected] = useState<ServiceState>({
      seo: false,
      ads: false,
      web: false,
    });
    
    const [total, setTotal] = useState(0);

    // Cada vez que cambie el estado de seleccionados, recalcula el total
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
          <div className=" max-w-md w-full ">
           
            <form className="space-y-3 ">
              {services.map((service) => (
                <div key={service.id} className="flex items-center justify-between gap-2 bg-white p-6 rounded-xl shadow-md">
                  <div className="flex">
                    <label htmlFor={service.id} className="text-gray-800 flex flex-col ">
                      <span>{service.name}</span>
                      <span>{service.description}</span>
                    </label>
                    <span>{service.price} €</span>
                  </div>
                 
                  <input
                    type="checkbox"
                    id={service.id}
                    name={service.id}
                    checked={selected[service.id]}
                    onChange={handleChange}
                    className="accent-blue-600"
                  /> <span className="text-gray-800">Select</span>
                </div>
              ))}
            </form>
            <div className="mt-6 text-xl font-semibold text-blue-600">
              Total price: {total} €
            </div>
          </div>
        </div>
      );
    }


export default Budget;