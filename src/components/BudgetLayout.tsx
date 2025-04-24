/* eslint-disable @typescript-eslint/no-unused-vars */

import ServiceItem from "./ServiceItem";  
import BudgetClientInput from "./BudgetClientInput";
import { useEffect, useState } from "react";
import { services } from "../data/services";
import { ServiceState, Budget } from "../types/Interfaces";
import { Link } from 'react-router-dom'

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
    const [budgets, setBudgets] = useState<Budget[]>(() => {
      const stored = localStorage.getItem('budgets');
      return stored ? JSON.parse(stored) : [];
    });
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

    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

    const validateForm = () => {
      const newErrors: { name?: string; email?: string } = {};
    
      if (clientName.trim().length < 2) {
        newErrors.name = "El nombre debe tener al menos 2 caracteres.";
      }
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(clientEmail)) {
        newErrors.email = "El email no es válido.";
      }
      
    
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSaveBudget = (e: { preventDefault: () => void; }) =>  {
      e.preventDefault();
      if (!validateForm()) return;
      
      const newBudget = {
        id: Date.now(),
        client: clientName,
        email: clientEmail,
        services: selectedServices, 
        total: total,         
      };
    
      const updatedBudgets = [...budgets, newBudget];
      setBudgets(updatedBudgets);
      localStorage.setItem('budgets', JSON.stringify(updatedBudgets));

      setClientEmail("");
      setClientName("");
      setPages(0);
      setLanguages(0);
      setSelectedServices({
        seo: false,
        ads: false,
        web: false,
      });
      setErrors({});

    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'name' | 'email') => {
      const value = e.target.value;
      if (field === 'name') {
        setClientName(value);
      } else {
        setClientEmail(value);
      }
  
      // Validar el campo cuando cambia el valor
      validateForm();
    };
    return (
      <div className=" flex items-start justify-center p-6">
      <div className="max-w-xl w-full">
      <h3 className="my-6">Solicita tu presupuesto:</h3>
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
          <div className="my-6 text-xl font-semibold text-selected text-right">
            Total presupuesto: {total} €
          </div>
          <div className="card mb-4 grid grid-cols-3 justify-between items-center gap-2 p-4 bg-white shadow-md rounded-xl">
            <BudgetClientInput
              clientEmail={clientEmail}
              setClientEmail={setClientEmail}
              clientName={clientName}
              setClientName={setClientName}
              errors={errors}
              handleInputChange={handleInputChange}
            />
            <button onClick={handleSaveBudget} className="btn-outline text-selected hover:text-white text-nowrap">Solicitar presupuesto</button>
            <div className="col-span-3">
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>
            </div>
            
        </form>
       
        {budgets.length > 0 && (
        <Link to="/progress" className='btn-outline !block mx-auto mt-8'>Ver todos los presupuestos en curso</Link>
        )}
      </div>
      
    </div>
      );
    }


export default BudgetLayout;