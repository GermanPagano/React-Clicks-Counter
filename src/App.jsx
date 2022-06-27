import React from 'react';
import './App.css';
import Boton from './componentes/boton';
import logo from './img/freecodecamp-logo.png';
import Contador from './componentes/contador';
import { useState }  from 'react';

function App() {
  const [ NumeroClick , setNumeroClick] = useState(0);

  const manejarClick = () => {
    setNumeroClick(NumeroClick+1);
  };

  const reinicirContador = () => {
      setNumeroClick( 0 ) 
};



  return (
    <div className="App">
        <div className='contenedor-logo'>
          <img className='logo' src= {logo} alt="logo" />
        </div>

      <div className='contenedor-contador'>
        < Contador numClics={ NumeroClick }> </Contador>
        < Boton texto='Click' esBotonDeClick={true}  manejarClick={ manejarClick} />
        < Boton texto='Reiniciar' esBotonDeClick={false} manejarClick={ reinicirContador} />
      </div>
    </div>
  );
}

export default App;
