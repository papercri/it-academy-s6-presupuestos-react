import { Link } from 'react-router-dom'

export default function DesktopMenu() {
  return (
    <nav className="flex items-center gap-2">
        <Link to="/" className='nav-link'>Home</Link> 
        <Link to="/budget" className='nav-link'>Calculate budget</Link> 
        <Link to="/progress" className='nav-link'>Current budgets</Link>
    </nav>
  )
}
