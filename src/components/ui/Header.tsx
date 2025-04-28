
import MobileMenu from "./MobileMenu"
import DesktopMenu from "./DesktopMenu"
import { useMediaQuery } from "react-responsive"

const Header = () =>{
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <header className="bg-gray-800 text-white p-2 md:p-4 shadow-2xl flex sm:flex-col sm:items-center items-start justify-between gap-2"> 
      <h1 className="md:text-3xl text-2xl font-bold mb-4 mt-4 text-center">Budget calculator</h1>
      {isMobile ? (<MobileMenu />) : null}
      {!isMobile ?<DesktopMenu />: null}
    </header>
  )
}

export default Header