import { BudgetDataProps } from "../types/Interfaces";
  
  function BudgetData({ budgetName, setBudgetName, clientName, setClientName }: BudgetDataProps) {
    return (
    <div className="mt-6">
        <input
            type="text"
            placeholder="Nombre del presupuesto"
            value={budgetName}
            className="form-input mb-4"
            onChange={(e) => setBudgetName(e.target.value)}
        />
        <br />
        <input
            type="text"
            placeholder="Nombre del cliente/a"
            value={clientName}
            className="form-input"
            onChange={(e) => setClientName(e.target.value)}
        />
    </div>
  )
}

export default BudgetData