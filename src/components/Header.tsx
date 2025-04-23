import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className="bg-gray-800 text-white p-4 shadow-2xl flex flex-col items-center"> 
      <h1 className="text-3xl font-bold mb-4 mt-4 text-center">Budget calculator</h1>
      <Link to="/" className='mx-auto text-white px-4 py-1 rounded border border-white hover:bg-gray-500 transition-all'>Home</Link>
    </div>
  )
}

export default Header