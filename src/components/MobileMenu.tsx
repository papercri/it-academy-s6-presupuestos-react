import { Link } from 'react-router-dom'
import { useState } from 'react';
import "../assets/styles/css/mobile-menu.css"

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="mobile-menu-container">
    <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav className={`mobile-menu ${isOpen ? 'active' : ''}`}>
      <Link to="/" className='mobile-nav-link' onClick={toggleMenu}>Home</Link> 
      <Link to="/budget" className='mobile-nav-link' onClick={toggleMenu}>Calcular presupuesto</Link> 
      <Link to="/progress" className='mobile-nav-link' onClick={toggleMenu}>Presupuestos en curso</Link>
    </nav>
  </div>
  )
}
