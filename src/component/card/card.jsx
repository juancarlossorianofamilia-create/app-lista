
import "./card.css";
import Button from "../button/button";

function Card({
  nombre,
  title,
  description,
  avatar,
  nombreBoton,
  colorFondo,
  colorText,
  enlace
}) {
  return (
    <div className="card">

      <img
        className="avatar"
        src={avatar}
        alt={`Avatar de ${nombre}`}
      />

      <h2 className="card-name">{nombre}</h2>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>

      {/* Reutilizando el botón */}
      <Button
        nombre={nombreBoton}
        colorFondo={colorFondo}
        colorText={colorText}
        enlace={enlace}
      />

    </div>
  );
}

export default Card;
