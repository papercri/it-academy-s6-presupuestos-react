/* eslint-disable @typescript-eslint/no-unused-vars */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {  Budget } from "../types/Interfaces";
import { services } from "../data/services";


interface ProgressBudgetProps {
  budgets: Budget[];
  handleDeleteBudget: (id: number) => void;
}

const ProgressBudget: React.FC<ProgressBudgetProps> = ({ budgets, handleDeleteBudget }) => {
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
            <>
              <div key={budget.id} className="card mb-4 flex justify-between items-center gap-2 p-4 bg-white shadow-md rounded-xl">
                <span><strong>Cliente:</strong><br/>{budget.client}</span> 
                <span><strong>Email:</strong><br/>{budget.email}</span>  
                <span><strong>Servicios:</strong><br/> {selectedServiceNames.join(", ")}</span> 
                <span><strong>Total:</strong><br/> {budget.total}€</span>
                <button 
                  onClick={() => handleDeleteBudget(budget.id)} 
                  className="text-red-500 hover:text-red-700 text-xl font-bold"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
          </>
        );
      })}
      </div>
    </div>
  )
}

export default ProgressBudget