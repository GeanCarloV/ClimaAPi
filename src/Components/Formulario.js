import React, { useState } from 'react';

const Formulario = () => {
    // sate del formulario, simpre hacemos que el name se igaul
    // que al de los inputs 
    const [busqueda, guardarBusdqueda] = useState({
        ciudad: '', 
        pais: ''
    });

    const [error, guardarError] = useState(false);

    //extrare la ciudad y pais
    const { ciudad, pais } = busqueda;

    // funcion que colaca los elemnto del staste
    const handleChange = e => { 
        // actualizr el satae, siempre poner una copia del sate
        // si no se pierde lo avanazado
        guardarBusdqueda({  
            ...busqueda, 
            [e.target.name]: e.target.value
        })
    }

    // caundo el usario da subimit al form 
    const handleSubmit = e => { 
        e.preventDefault();
        
        // validacion 
        if(ciudad.trim() === '' || pais.trim() === '') { 
            guardarError(true); 
            return;
        }

        guardarError(false); 

    }


    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ? <p className="red darkent-4 error">Todos los campos son obligatorios</p> : null}
            <div className="input-field col s12"> 
            {/* ponemos el input primero luego el labro por materialez */}
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
            {/* llos name son para leer el state mas facilmente 
            tenemos que pone el value con la variable 
            por que asi se puede enviar*/}
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