import React, { useState } from 'react';

const Formulario = ({busqueda, guardarBusdqueda, guardarConsultar}) => {
    
    const [error, guardarError] = useState(false);

    //extrare la ciudad y pais
    const { ciudad, pais } = busqueda;

    const handleChange = e => { 
        guardarBusdqueda({  
            ...busqueda, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => { 
        e.preventDefault();
        // validacion 
        if(ciudad.trim() === '' || pais.trim() === '') { 
            guardarError(true); 
            return;
        }
        guardarError(false); 

        //ponemos el state como true de consultar
        guardarConsultar(true);  
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ? <p className="red darkent-4 error">Todos los campos son obligatorios</p> : null}
            <div className="input-field col s12"> 
                <input  
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select 
                    name="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Selecione un Pais</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais: </label>
            </div>
            
            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Busacr Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>

        </form>
     );
}
 
export default Formulario;