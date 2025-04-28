
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <main className=" flex flex-col h-screen  pt-40 mx-auto px-20 text-center bg-selected text-amber-50">
      <h1 className='lg:text-6xl text-4xl font-bold mb-10 lg:leading-20 leading-normal text-center' >
        Welcome to your personal Web Development Budget Calculator!
      </h1>
      <Link to="/budget" className="btn-home">Calculate your budget</Link>
    </main>
  )
}

export default HomePage