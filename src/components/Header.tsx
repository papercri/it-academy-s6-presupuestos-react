
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-2xl flex flex-col items-center"> 
      <h1 className="text-3xl font-bold mb-4 mt-4 text-center">Budget calculator</h1>
      <ul>
        <Link to="/" className='mx-auto text-white px-5 py-1 rounded  hover:bg-gray-500 transition-all'>Home</Link>

        <Link to="/budget" className='mx-auto text-white px-5 py-1 rounded hover:bg-gray-500 transition-all'>Calcular presupuesto</Link>
        
        <Link to="/progress" className='mx-auto text-white px-5 py-1 rounded hover:bg-gray-500 transition-all'>Presupuestos en curso</Link>
        
      </ul>
    </header>
  )
}

export default Header