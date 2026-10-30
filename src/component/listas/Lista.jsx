import "./lista.css";


function Lista({ id, texto, valor, hora }) {

  let operacion;

  switch (texto) {

      case "-1":
      operacion="restar"
      break;
    
      case "+1":
      operacion="sumar"
      break;

      case "-5":
      operacion="restar"
      break;
    
      case "+5":
      operacion="sumar"
      break;

      case "-10":
      operacion="restar"
      break;
    
      case "+10":
      operacion="sumar"
      break;
    
      default:
      operacion="normal"

  }

    

  return (
    <article className="item-historial">
      
   
      <div className="contenedor-datos">

            <span className="contendor-id">{id}</span>

            <div className="contenedor-descripcion">
            <h4 className={operacion}>{texto}</h4>
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
