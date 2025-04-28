import ProgressBudgetItem from "./ProgressBudgetItem";
import {  Budget } from "../../types/Interfaces";
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
      if (confirm("Are you sure you want to delete all quotes?")) {
        setBudgets([]);
        localStorage.removeItem("budgets");
      }
    };
    return (
    <main className=" bg-gray-100 flex items-start justify-center md:p-6 p-2">
      <div className="max-w-xl w-full">
        <h3 className="my-6">Current budgets:</h3>
        <div className='filters'>

        </div>
        <ProgressBudgetItem 
        budgets={budgets} 
        handleDeleteBudget={handleDeleteBudget} 
        />
        <div className='flex justify-center items-center mt-8 gap-4 md:flex-row flex-col'>
          <button
              onClick={handleDeleteAll}
              className="btn-danger !md:w-auto !w-full text-center"
          >
             Delete all budgets
          </button>
          <Link to="/budget" className='btn-outline !md:w-auto !w-full text-center'>Calculate new budget</Link>
        </div>
      </div>
    </main>
    )
  }

export default ProgressBudgetLayout