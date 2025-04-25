import ProgressBudgetItem from './ProgressBudgetItem';  
import {  Budget } from "../types/Interfaces";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function ProgressBudgetLayout() {
    const [budgets, setBudgets] = useState<Budget[]>([]);
    useEffect(() => {
      const storedBudgets = localStorage.getItem('budgets');
      if (storedBudgets) {
        setBudgets(JSON.parse(storedBudgets));
      }
    }, []);
    const handleDeleteBudget = (id: number) => {
      const updatedBudgets = budgets.filter((budget) => budget.id !== id);
      setBudgets(updatedBudgets);
      localStorage.setItem('budgets', JSON.stringify(updatedBudgets));
    };
    const handleDeleteAll = () => {
      if (confirm("¿Estás seguro de que quieres borrar todos los presupuestos?")) {
        setBudgets([]);
        localStorage.removeItem("budgets");
      }
    };
    return (
    <main className=" bg-gray-100 flex items-start justify-center p-6">
      <div className="max-w-xl w-full">
        <h3 className="my-6">Presupuestos en curso:</h3>
        <ProgressBudgetItem 
        budgets={budgets} 
        handleDeleteBudget={handleDeleteBudget} 
        />
        <div className='flex justify-center items-center mt-8 gap-4'>
          <button
              onClick={handleDeleteAll}
              className="btn-danger"
          >
              Borrar todos los presupuestos
          </button>
          <Link to="/budget" className='btn-outline '>Calcular nuevo presupuesto</Link>
        </div>
      </div>
    </main>
    )
  }

export default ProgressBudgetLayout