import ProgressBudgetItem from "./ProgressBudgetItem";
import {  Budget } from "../../types/Interfaces";
import { useState, useEffect } from "react";
import SortButton from  "../ui/SortButton";
import { Link, useSearchParams } from 'react-router-dom';
import Modal from "../ui/Modal";
import BudgetCard from "./BudgetCard";
import { ToastContainer, toast } from 'react-toastify';

function ProgressBudgetLayout() {
    const [searchParams] = useSearchParams();
    const [budgets, setBudgets] = useState<Budget[]>([]);
    const [nameOrder, setNameOrder] = useState(false);  
    const [dateOrder, setDateOrder] = useState(false);  
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBudget, setSelectedBudget] = useState<Budget | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    //Función para obtener los parámetros de búsqueda de la URL y establecer los valores iniciales
    // ej url: /progress?search=cris&sortName=asc&sortDate=asc

    useEffect(() => {
      const storedBudgets = localStorage.getItem("budgets");
      if (storedBudgets) {
        const parsedBudgets = JSON.parse(storedBudgets);
        setBudgets(parsedBudgets);
        const id = searchParams.get('id');
          if (id) {
            const budget = parsedBudgets.find((b: Budget) => b.id === Number(id));
            if (budget) {
              setSelectedBudget(budget);
              setIsModalOpen(true);
            }
          }
    
        const sortName = searchParams.get("sortName") === "asc";
        const sortDate = searchParams.get("sortDate") === "asc";
        const search = searchParams.get("search") || "";
        setSearchTerm(search);
    
        if (sortName) {
          setBudgets([...parsedBudgets].sort((a, b) => a.client.localeCompare(b.client)));
          setNameOrder(true);
        } else if (sortDate) {
          setBudgets([...parsedBudgets].sort((a, b) => a.id - b.id));
          setDateOrder(true);
        }
      }

    }, []);
    
    const handleOpenModal = (budget: Budget) => {
      setSelectedBudget(budget);
      setIsModalOpen(true);
    };
    
    const handleShareURL = () => {
      if (!selectedBudget) return;
      const url = `${window.location.origin}/progress?search=${selectedBudget.client}`;
      navigator.clipboard.writeText(url);
      toast("URL copied to clipboard!");
    };

    const handleDeleteBudget = (id: number) => {
      const updatedBudgets = budgets.filter((budget) => budget.id !== id);
      setBudgets(updatedBudgets);
      localStorage.setItem('budgets', JSON.stringify(updatedBudgets));
    };
    
    const handleDeleteAll = () => {
      toast.info(
        <div>
          <p>Are you sure you want to delete all quotes?</p>
          <div className="flex justify-end gap-2 mt-2">
            <button
              onClick={() => {
                setBudgets([]);
                localStorage.removeItem("budgets");
                toast.dismiss();
                toast.success("All budgets deleted!");
              }}
              className="text-white bg-red-600 px-3 py-1 rounded"
            >
              Yes
            </button>
            <button
              onClick={() => toast.dismiss()}
              className="text-gray-700 bg-gray-200 px-3 py-1 rounded"
            >
              No
            </button>
          </div>
        </div>,
        { autoClose: false }
      );
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

        <div className="grid grid-cols-10 md:grid-cols-3 justify-items-stretch justify-around md:gap-4 gap-0.5 mb-6 ">
          <div className="col-span-4 md:col-span-1">
            <input 
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => handleInputChange(e)}
              className="form-input shadow-none py-1.5 border-3 border-[var(--color-selected)] ring-0 text-[var(--color-selected)] font-bold focus:bg-slate-200"
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <SortButton
              onClick={handleSortByName}
              label="By Name"
              isAsc={nameOrder}
            />
          </div>
          <div  className="col-span-3 md:col-span-1">
            <SortButton
              onClick={handleSortByDate}
              label="By Date"
              isAsc={dateOrder}
            />
          </div>
        </div>

        <ProgressBudgetItem 
          budgets={filteredBudgets} 
          handleDeleteBudget={handleDeleteBudget} 
          onOpenModal={handleOpenModal}
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedBudget && (
          <BudgetCard
            budget={selectedBudget}
            onShare={handleShareURL}
          />
        )}
      </Modal>
      <ToastContainer position="top-center" autoClose={1000} />
    </main>
    )
  }

export default ProgressBudgetLayout