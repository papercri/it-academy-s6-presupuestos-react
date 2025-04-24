
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className=" flex flex-col h-screen  pt-40 mx-auto px-20 text-center bg-selected text-amber-50">
      <h1 className='text-6xl font-bold mb-10 leading-20' >
        Welcome to your personal Web Development Budget Calculator!
      </h1>
      <Link to="/budget" className="btn-home">Calculate your budget</Link>
    </div>
  )
}

export default HomePage