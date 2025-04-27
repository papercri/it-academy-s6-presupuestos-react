import { Link } from 'react-router-dom'

export default function DesktopMenu() {
  return (
    <nav className="flex items-center gap-2">
        <Link to="/" className='nav-link'>Home</Link> 
        <Link to="/budget" className='nav-link'>Calcular presupuesto</Link> 
        <Link to="/progress" className='nav-link'>Presupuestos en curso</Link>
    </nav>
  )
}
