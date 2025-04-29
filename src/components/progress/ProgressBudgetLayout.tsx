import ProgressBudgetItem from "./ProgressBudgetItem";
import {  Budget } from "../../types/Interfaces";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import SortButton from  "../ui/SortButton";


function ProgressBudgetLayout() {
    const [budgets, setBudgets] = useState<Budget[]>([]);
    const [nameOrder, setNameOrder] = useState(false);  
    const [dateOrder, setDateOrder] = useState(false);  
    const [searchTerm, setSearchTerm] = useState('');

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
        
      };
    };
    const handleSortByName = () => {
      const sorted = [...budgets].sort((a, b) => {
        return nameOrder
          ? a.client.localeCompare(b.client)
          : b.client.localeCompare(a.client);
      });
      setBudgets(sorted);
      setNameOrder(!nameOrder); 
    };
  
    const handleSortByDate = () => {
      const sorted = [...budgets].sort((a, b) => {
        return dateOrder
        ? b.id - a.id
        : a.id - b.id;
      });
      setBudgets(sorted);
      setDateOrder(!dateOrder); 
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };
    const filteredBudgets = budgets.filter((budget) => ((budget.client).toLocaleLowerCase().includes(searchTerm)));
    
    return (
    <main className=" bg-gray-100 flex items-start justify-center md:p-6 p-2">
      <div className="max-w-xl w-full">
        <h3 className="my-6">Current budgets:</h3>

        <div className="grid grid-cols-5 md:grid-cols-3 justify-items-stretch justify-around md:gap-4 gap-1 mb-6 ">
          <div>
            <input 
              type="text"
              placeholder="search..."
              value={searchTerm}
              onChange={(e) => handleInputChange(e)}
              className="form-input shadow-none py-1.5 border-3 border-[var(--color-selected)] ring-0 text-[var(--color-selected)] font-bold focus:bg-slate-200"
            />
          </div>
          <div className="col-span-2">
            <SortButton
              onClick={handleSortByName}
              label="Sort by Name"
              isAsc={nameOrder}
            />
          </div>
          <div  className="col-span-2">
            <SortButton
              onClick={handleSortByDate}
              label="Sort by Date"
              isAsc={dateOrder}
            />
          </div>
        </div>

        <ProgressBudgetItem 
          budgets={filteredBudgets} 
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