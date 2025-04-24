/* eslint-disable @typescript-eslint/no-unused-vars */

import ServiceItem from "./ServiceItem";  
import BudgetClientInput from "./BudgetClientInput";
import ProgressBudget from "./ProgressBudget";  
import { useEffect, useState } from "react";
import { services } from "../data/services";
import { ServiceState, Budget } from "../types/Interfaces";


function BudgetLayout() {
    const [selectedServices, setSelectedServices] = useState<ServiceState>({
      seo: false,
      ads: false,
      web: false,
    });

    const [total, setTotal] = useState(0);
    const [pages, setPages] = useState(1);
    const [languages, setLanguages] = useState(1);
    const [clientEmail, setClientEmail] = useState('');
    const [clientName, setClientName] = useState(''); 

    useEffect(() => {
      let newTotal = services.reduce((sum, service) => {
        return selectedServices[service.id] ? sum + service.price : sum;
      }, 0);
      if (selectedServices.web) {
        newTotal += (pages + languages) * 30;
      }
      setTotal(newTotal);
    }, [selectedServices, pages, languages]);
  
    interface HandleChangeEvent {
      target: {
      name: string;
      checked: boolean;
      };
    }
    const handleChange = (e: HandleChangeEvent): void => {
      setSelectedServices((i) => ({
      ...i,
      [e.target.name]: e.target.checked,
      }));
    };

    const [budgets, setBudgets] = useState< Budget[]>([]);

    const handleSaveBudget = (e: { preventDefault: () => void; }) =>  {
      e.preventDefault();
      if (!clientEmail || !clientName || total === 0) {
        alert("Por favor, rellena todos los datos.");
        return;
      }

      const newBudget = {
        id: Date.now(),
        client: clientName,
        email: clientEmail,
        services: selectedServices, 
        total: total,         
      };
    
      setBudgets([...budgets, newBudget]);
      setClientEmail("");
      setClientName("");
      setPages(0);
      setLanguages(0);
      setSelectedServices({
        seo: false,
        ads: false,
        web: false,
      });

    };
    const handleDeleteBudget = (id: number) => {
      const updatedBudgets = budgets.filter((budget) => budget.id !== id);
      setBudgets(updatedBudgets);
    };

    return (
      <div className="min-h-screen bg-gray-100 flex items-start justify-center p-6">
      <div className="max-w-xl w-full">
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
          <div className="my-10 text-xl font-semibold text-selected text-right">
            Total presupuesto: {total} €
          </div>
          <div className="card mb-4 flex justify-between items-center gap-2 p-4 bg-white shadow-md rounded-xl">
            <BudgetClientInput
              clientEmail={clientEmail}
              setClientEmail={setClientEmail}
              clientName={clientName}
              setClientName={setClientName}
            />
            <button onClick={handleSaveBudget} className="btn-outline text-selected hover:text-white text-nowrap">Solicitar presupuesto</button>
            </div>
          
        </form>
        
        <ProgressBudget 
          budgets={budgets} 
          handleDeleteBudget={handleDeleteBudget} 
        />
      </div>
      
    </div>
      );
    }


export default BudgetLayout;