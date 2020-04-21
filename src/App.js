import React, {Fragment} from 'react';
import Header from './Components/Header'
import Formulario from './Components/Formulario'
function App() {
  return (
    <Fragment>
      <Header 
        titulo='Clima React App'
      />
      {/* por el framewoke de matialzie  */}
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            {/* con row decimos que vamos a trbajar con colum, 
            y le decimos que para el tamañao mediano 6 columans, 
            y para el tamaño pequeño que tome las 12 columnas */}
            <div className="col m6 s12 ">
              <Formulario />
            </div>
            <div className="col m6 s12 ">
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
