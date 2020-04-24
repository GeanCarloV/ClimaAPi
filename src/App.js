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
        const url =  `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        
        const respuesta = await fetch(url);
        const resultado = await respuesta.json() 
        
        guardarResultado(resultado);
        guardarConsultar(false);

        if(resultado.cod === '404') { 
          guardarError(true);
        } else { 
          guardarError(false);
        }
        }
      }
    
    
    consutlarAPI();
    // la sigueinte liena es para waring del useefect  
    // eslint-disable-next-line
  }, [consultar])

  // CARGAR  CONDICIONALMENTE DE COMPONENTES
  let componente; 
  if(error) {
    componente = <Error mensaje="No hay restulados" />
  } else { 
    componente = <Clima 
                    resultado = {resultado}
                    />
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
              {componente}
            </div>
          
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
