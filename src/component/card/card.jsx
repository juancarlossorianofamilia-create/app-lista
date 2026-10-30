import "./card.css";
import Button from "../button/button";

function Card({ nombre, title, description, avatar, nombreBoton, colorFondo,colorText,enlace }) {
  return (
    
    <div className="card">
      
      
      <img className="avatar" src={avatar} alt="Fotos del avatar">
        
      </img>
        
      <h2>{nombre}</h2>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      
      {/*Reutilizando el boton*/}
      
      <Button className="boton"
        nombre={nombreBoton}
        colorFondo={colorFondo}
        colorText={colorText}
        enlace={enlace}
      />

    </div>
  );
}

export default Card;