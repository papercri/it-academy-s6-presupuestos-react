import './assets/styles/css/app.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
function App() {

  return (
    <>
      <div>
      <h1 className="text-3xl font-bold underline bg-cris">
          Hola mundo
        </h1>
          <FontAwesomeIcon icon={faArrowLeft} />
          <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </>
  )
}

export default App
