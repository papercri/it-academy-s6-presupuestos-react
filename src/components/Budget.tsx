import ServiceItem from "./ServiceItem";
import { useEffect, useState } from "react";
import { services } from "../data/services";
import { ServiceState, HandleChangeEvent } from "../types/Interfaces";

function Budget() {
    const [selectedServices, setSelectedServices] = useState<ServiceState>({
      seo: false,
      ads: false,
      web: false,
    });

    const [total, setTotal] = useState(0);
    const [pages, setPages] = useState(0);
    const [languages, setLanguages] = useState(0);

    useEffect(() => {
      let newTotal = services.reduce((sum, service) => {
        return selectedServices[service.id] ? sum + service.price : sum;
      }, 0);
      if (selectedServices.web) {
        newTotal += (pages + languages) * 30;
      }
      setTotal(newTotal);
    }, [selectedServices, pages, languages]);
  
    
    const handleChange = (e: HandleChangeEvent): void => {
      setSelectedServices((i) => ({
      ...i,
      [e.target.name]: e.target.checked,
      }));
    };

    return (
      <div className="min-h-screen bg-gray-100 flex items-start justify-center p-6">
      <div className="max-w-md w-full">
        <form className="space-y-3">
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              checked={selectedServices[service.id]}
              onChange={handleChange}
              setPages={setPages} 
              setLanguages={setLanguages} 
              pages={pages}
              languages={languages}
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