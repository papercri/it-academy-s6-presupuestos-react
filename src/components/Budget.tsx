/* eslint-disable @typescript-eslint/no-unused-vars */
import ServiceItem from "./ServiceItem";  
import BudgetData from "./BudgetData";
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

    const [budgetName, setBudgetName] = useState('');
    const [clientName, setClientName] = useState(''); 
    
    const [budgets, setBudgets] = useState<{ 
      id: number; 
      name: string; 
      client: string; 
      services: ServiceState; 
      total: number; 
    }[]>([]);

    const handleSaveBudget = () =>  {
      if (!budgetName || !clientName || total === 0) {
        alert("Por favor, rellena todos los datos.");
        return;
      }

      const newBudget = {
        id: Date.now(),
        name: budgetName,
        client: clientName,
        services: selectedServices, 
        total: total,         
      };
    
      setBudgets([...budgets, newBudget]);
      setBudgetName("");
      setClientName("");
      setPages(0);
      setLanguages(0);
      setSelectedServices({
        seo: false,
        ads: false,
        web: false,
      });

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
          <BudgetData
            budgetName={budgetName}
            setBudgetName={setBudgetName}
            clientName={clientName}
            setClientName={setClientName}
          />
        </form>

        <div className="mt-6">
          <div className="mt-6 text-xl font-semibold text-selected text-right">
            Total price: {total} €
          </div>
          <button onClick={handleSaveBudget} className="btn-outline text-selected hover:text-white">Guardar presupuesto</button>
        </div>

        <div className="mt-6">
          <h3 className="mt-3">Presupuestos guardados</h3>
          <div>
            {budgets.map((budget) => {
              const selectedServiceNames = Object.entries(budget.services)
              .filter(([ x , isChecked]) => isChecked)
              .map(([serviceId]) => {
                const service = services.find((i) => i.id === serviceId);
                return service?.name || serviceId;
              });
              return (
              <li key={budget.id} className="card mb-4 flex justify-between items-center gap-2 p-4 bg-white shadow-md rounded-xl">
                <strong className="uppercase">{budget.name}</strong>
                <span>Cliente: {budget.client}</span>  
                <span>Servicios: {selectedServiceNames.join(", ")}</span> 
                <strong>Total: {budget.total}€</strong>
              </li>
            );
          })}
          </div>
        </div>
        
      </div>

      
    </div>
      );
    }


export default Budget;