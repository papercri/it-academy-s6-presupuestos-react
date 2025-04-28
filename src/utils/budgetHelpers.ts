/* eslint-disable @typescript-eslint/no-unused-vars */

import { Budget, ServiceState, SaveBudgetParams } from "../types/Interfaces";
import { services } from "../data/services"; 

export const validateForm = (
  name: string,
  email: string,
  selectedServices: ServiceState
): { name?: string; email?: string; services?: string } => {
  const errors: { name?: string; email?: string; services?: string } = {};

 
  if (name.trim().length < 2) {
    errors.name = "Name is required.";
  }
  const clientEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!clientEmail.test(email)) {
    errors.email = "The e-mail is not valid.";
  }
  const selectedCount = Object.values(selectedServices).filter(service => service).length;
  if (selectedCount === 0) {
    errors.services = "You must select at least one service.";
  }

  return errors;
};

export const calculateTotal = (
  selectedServices: ServiceState,
  pages: number,
  languages: number,
  services: { id: keyof ServiceState; price: number }[],
  isDiscountApplied: boolean
): number => {
  let newTotal = services.reduce((sum, service) => {
    return selectedServices[service.id] ? sum + service.price : sum;
  }, 0);
 
  if (selectedServices.web) {
    newTotal += (pages + languages) * 30;
  }
  if (isDiscountApplied) {
    newTotal = newTotal * 0.8; 
  }
  return newTotal;
};

export function handleSaveBudget({
  e,
  clientName,
  clientEmail,
  selectedServices,
  total,
  budgets,
  setBudgets,
  setClientName,
  setClientEmail,
  pages,
  languages,
  setPages,
  setLanguages,
  setSelectedServices,
  setErrors,
  isDiscountApplied,
  isBudgetAddedModalOpen,
  setIsBudgetAddedModalOpen

}: SaveBudgetParams) {
  e.preventDefault();

  // Validar el formulario si hay errores sale de la funcion y no guarda el presupuesto

  const newErrors = validateForm(clientName, clientEmail, selectedServices);
  setErrors(newErrors);
  if (Object.keys(newErrors).length > 0) return;

  const discountedTotal = calculateTotal(selectedServices, pages, languages, services, isDiscountApplied);

  const newBudget: Budget = {
    id: Date.now(),
    client: clientName,
    email: clientEmail,
    services: selectedServices,
    total: discountedTotal,
    subscriptionType: isDiscountApplied ? 'anual' : 'mensual',
  };
  
  const updatedBudgets = [...budgets, newBudget];
  setBudgets(updatedBudgets);
  localStorage.setItem("budgets", JSON.stringify(updatedBudgets));

  setIsBudgetAddedModalOpen(true);
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
}
