import "./App.css";
import freeCodeCampLogo from "./imagenes/logo-freecodecamp.png";
import Boton from "./componentes/Boton.jsx";
import Contador from "./componentes/Contador.jsx";
import {useState} from "react"

function App() {

  const [ numClicks, setNumClicks ] = useState (0)

  const manejarClick = () => {
    setNumClicks (numClicks + 1 ) 
  };

  const reiniciarContador = () => {
    setNumClicks (0)
  };
  return (
    <div className="App">
      <div className="freecodcamp-logo-contenedor">
        <img
          className="freecodcamp-logo"
          src={freeCodeCampLogo}
          alt="logo de freecodcamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks}/>
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
