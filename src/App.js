import React, {Fragment, useState, useEffect} from 'react';
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import Clima from './Components/Clima'
import Error from './Components/error'

function App() {

  const [busqueda, guardarBusdqueda] = useState({
    ciudad: '', 
    pais: ''
  });
  const [consultar, guardarConsultar] = useState(false); 
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false); 






  const {ciudad, pais} = busqueda;

  useEffect(() => { 

    const consutlarAPI = async () => { 
        if(consultar){
        const appId = 'da1b33b1b479abb2c945e3e4fc73bb3a';
        const url =  `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        
        const respuesta = await fetch(url);
        const resultado = await respuesta.json() 
        
        guardarResultado(resultado);
        guardarConsultar(false);

        // verifica si hubo resutlados corrctor en la cosnutal 
        if(resultado.cod === '404') { 
          guardarError(true);
        }

        }
      }
      
    consutlarAPI();
  }, [consultar])

  let componente; 
  if(error) {
    co
  }
  
  return (
    <Fragment>
      <Header 
        titulo='Clima React App'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            
            <div className="col m6 s12 ">
              <Formulario 
                busqueda={busqueda}
                guardarBusdqueda={guardarBusdqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>

            <div className="col m6 s12 ">
              <Clima 
                resultado={resultado}
              /> 
            </div>
          
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
