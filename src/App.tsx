import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BudgetCalculator from './pages/BudgetCalculator'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/budget" element={<BudgetCalculator/>} />
    </Routes>
  )
}
export default App
