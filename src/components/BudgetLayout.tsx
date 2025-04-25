/* eslint-disable @typescript-eslint/no-unused-vars */

import ServiceItem from "./ServiceItem";  
import BudgetClientInput from "./BudgetClientInput";
import Switch from "./Switcher";
import { useEffect, useState } from "react";
import { services } from "../data/services";
import { Budget, ServiceState } from "../types/Interfaces";
import { Link } from 'react-router-dom'
import {  calculateTotal, validateForm, handleSaveBudget } from "../utils/budgetHelpers";

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
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; services?: string }>({});

  //Función para calcular el total del presupuesto

  useEffect(() => {
   setTotal(calculateTotal(selectedServices, pages, languages, services, isDiscountApplied));
  }, [selectedServices, pages, languages, isDiscountApplied]);

  //Función para manejar el cambio de los inputs de los servicios y validar el formulario

  interface HandleChangeEvent {
    target: {
      name: string;
      checked: boolean;
    };
  }
  const handleChange = (e: HandleChangeEvent): void => {
    setSelectedServices((prevServices: ServiceState) => {
      const updatedServices = {
        ...prevServices,
        [e.target.name]: e.target.checked,
      };
      const newErrors = validateForm(clientName, clientEmail, updatedServices);
      setErrors(newErrors);
      return updatedServices;
    });
  };

//Función para manejar el cambio de los inputs del cliente y validar el formulario

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'name' | 'email') => {
    const value = e.target.value;
    if (field === 'name') {
      setClientName(value);
    } else {
      setClientEmail(value);
    }
    const newErrors = validateForm(
      field === 'name' ? value : clientName,
      field === 'email' ? value : clientEmail,
      selectedServices
    );
    setErrors(newErrors);
  };

//Función para manejar el cambio del switch y aplicar el descuento
  const handleToggleDiscount = (isChecked: boolean) => {
    setIsDiscountApplied(isChecked); 
  };

//Precio del servicio Web dinamico
  let webPrice = services[2].price;
  if (selectedServices.web) {
    webPrice += (pages + languages) * 30;
  }

  return (
    <main className=" flex items-start justify-center p-6">
      <div className="max-w-xl w-full">
        <h3 className="my-6">Solicita tu presupuesto:</h3>
        <Switch onToggle={handleToggleDiscount} />
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
              discount={isDiscountApplied}
              webPrice={webPrice}
             
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
              <button
                onClick={(e) =>
                  handleSaveBudget({
                    e,
                    clientName,
                    clientEmail,
                    selectedServices,
                    total,
                    budgets,
                    setBudgets,
                    setClientName,
                    setClientEmail,
                    setPages,
                    pages,
                    languages,
                    setLanguages,
                    setSelectedServices,
                    setErrors,
                    isDiscountApplied,
                    webPrice
                  })
                }
                className="btn-outline text-selected hover:text-white text-nowrap" >Solicitar presupuesto</button>
              <div className="col-span-3">
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
              {errors.services && <p className="text-sm text-red-600 mt-1">{errors.services}</p>}
            </div>
          </div>
        </form>
        {budgets.length > 0 && (
        <Link to="/progress" className='btn-outline !block mx-auto mt-8'>Ver todos los presupuestos en curso</Link>
        )}
      </div>
    </main>
    );
  }

export default BudgetLayout;