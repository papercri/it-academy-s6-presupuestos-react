/* eslint-disable @typescript-eslint/no-unused-vars */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {  Budget } from "../types/Interfaces";
import { services } from "../data/services";

interface ProgressBudgetProps {
  budgets: Budget[];
  handleDeleteBudget: (id: number) => void;
}

const ProgressBudgetItem: React.FC<ProgressBudgetProps> = ({ budgets, handleDeleteBudget }) => {
    return (
    <div>
      <div>
        {budgets.map((budget) => {
          const selectedServiceNames = Object.entries(budget.services)
          .filter(([ _ , isChecked]) => isChecked)
          .map(([serviceId]) => {
            const service = services.find((i) => i.id === serviceId);
            return service?.name || serviceId;
          });
          return (
            <div key={budget.id} className="card mb-4  p-4 bg-white shadow-md rounded-xl flex flex-col">
              <div className="flex justify-between items-start gap-2">
                <em className="text-sm text-selected font-bold">{budget.subscriptionType === 'anual' ? 'Suscripción anual (20% dto)' : 'Suscripción mensual'}</em>
               <button 
                  onClick={() => handleDeleteBudget(budget.id)} 
                  className="text-red-500 hover:text-red-700 text-xl font-bold"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2 justify-between">
                <span className="col-span-2"><strong className="capitalize">{budget.client}</strong><br/><em>{budget.email}</em></span> 
                <span className="justify-self-center"><strong>Servicios:</strong><br/> {selectedServiceNames.join(", ")}</span> 
                <span className="justify-self-end"><strong>Total:</strong><br/> {budget.total}€</span>
              </div>
                
               
            </div>
        );
      })}
      </div>
    </div>
  )
}

export default ProgressBudgetItem