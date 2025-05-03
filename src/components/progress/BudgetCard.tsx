/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { Budget } from "../../types/Interfaces";
import { services } from "../../data/services";

interface BudgetCardProps {
  budget: Budget;
  onShare?: () => void;
}

const BudgetCard: React.FC<BudgetCardProps> = ({ budget,  onShare  }) => {
  const selectedServiceNames = Object.entries(budget.services)
    .filter(([_, isChecked]) => isChecked)
    .map(([serviceId]) => services.find((i) => i.id === serviceId)?.name || serviceId);

  return (
    <div className="card p-4  flex border-0 shadow-none flex-col">
      <div className="flex justify-between items-start gap-2">
        <em className="text-sm text-selected font-bold">
          {budget.subscriptionType === "anual"
            ? "Annual subscription (20% discount)"
            : "Monthly subscription"}
        </em>
      </div>

      <div className="grid grid-cols-4 gap-2 justify-between text-left mt-4 text-md">
        <span className="col-span-2">
          <strong className="capitalize">{budget.client}</strong>
          <br />
          <em>{budget.email}</em>
        </span>
        <span className="justify-self-center">
          <strong className="text-gray-600">Services</strong>
          <br />
          {selectedServiceNames.join(", ")}
        </span>
        <span className="justify-self-end">
          <strong className="text-gray-600">Total</strong>
          <br />
          <strong className="text-2xl">{budget.total}€</strong>
        </span>
      </div>
      <div className="flex gap-2 self-end mt-4 text-selected text-sm">
      
            <button
              onClick={onShare}
              className="btn-icon"
            >
              Share <FontAwesomeIcon icon={faShare} />
            </button>

     
        </div>
    </div>
  );
};

export default BudgetCard;
