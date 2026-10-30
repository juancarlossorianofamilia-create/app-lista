//import { useState } from "react";

import "./lista.css";




function Lista({ id, texto, valor, hora }) {
  return (
    <article className="item-historial">

      <div className="contenedor-datos">

            <span className="contendor-id">{id}</span>

            <div className="contenedor-descripcion">
            <h4 className="restar">{texto}</h4>
            <span>{hora}</span>
            </div>

        </div>
        
        <div>
            <span className="contendor-id">{valor}</span>

        </div>
      

    </article>
  );
}

export default Lista;
