/* eslint-disable @typescript-eslint/no-unused-vars */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faEye } from "@fortawesome/free-solid-svg-icons";
import { Budget } from "../../types/Interfaces";
import { services } from "../../data/services";
import { Tooltip } from 'react-tooltip'


interface ProgressBudgetProps {
  budgets: Budget[];
  handleDeleteBudget: (id: number) => void;
  onOpenModal: (budget: Budget) => void;
}
const ProgressBudgetItem: React.FC<ProgressBudgetProps> = ({ budgets, handleDeleteBudget, onOpenModal }) => {
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
            <div key={budget.id} className="card mb-6  p-4 bg-white shadow-md rounded-xl flex flex-col">
              <div className="flex justify-between items-start gap-2">
                <em className="text-sm text-selected font-bold">{budget.subscriptionType === 'anual' ? 'Annual subscription (20% discount)' : 'Monthly subscription'}</em>
              <div>
              <button 
                  onClick={() => handleDeleteBudget(budget.id)} 
                  className="btn-close"
                  data-tooltip-id="tooltip" data-tooltip-content="Delete quote"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
                <Tooltip id="tooltip" />
              </div>
               
              </div>
              <div className="grid grid-cols-4 gap-2 justify-between">
                <span className="col-span-2">
                  <strong className="capitalize">{budget.client}</strong> <button onClick={() => 
                onOpenModal(budget)}
                data-tooltip-id="tooltip" 
                data-tooltip-content="View details"
                className=" hover:text-selected text-lg text-gray-600 ml-2"
              >
                  <FontAwesomeIcon icon={faEye} />
              </button><br/>
                  <em>{budget.email}</em>
                </span> 
                <span className="justify-self-center">
                  <strong className="text-gray-600">Services</strong><br/> 
                  {selectedServiceNames.join(", ")}
                </span> 
                <span className="justify-self-end ">
                  <strong className="text-gray-600">Total</strong><br/> 
                  <strong className="text-2xl">{budget.total}€</strong>
                </span>
              </div>
             
            </div>
        );
      })}
      </div>
    </div>
  )
}

export default ProgressBudgetItem