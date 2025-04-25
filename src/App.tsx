import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BudgetCalculator from './pages/BudgetCalculator'
import ProgressBudgetPage from './pages/ProgressBudgetPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/budget" element={<BudgetCalculator/>} />
      <Route path="/progress" element={<ProgressBudgetPage/>} />
    </Routes>
  )
}
export default App
