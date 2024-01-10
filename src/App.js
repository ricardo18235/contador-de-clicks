import "./App.css";
import freeCodeCampLogo from "./imagenes/logo-freecodecamp.png";
import Boton from "./componentes/Boton.jsx";
function App() {
  const manejarClick = () => {
    console.log("Click");
  };
  const reiniciarContador = () => {
    console.log("Reiniciar");
  };
  return (
    <div className="App">
      <div className="freecodcamp-logo-contenedor">
        <img
          className="freecodcamp-logo"
          src={freeCodeCampLogo}
          alt="logo de freecodcamp"
        />
        <div className="contenedor-principal">
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
    </div>
  );
}

export default App;
