
import "./button.css";

function Button({ nombre, colorFondo, colorText, enlace }) {

  return (
    <a
      className="boton"
      href={enlace}
      style={{
        backgroundColor: colorFondo,
        color: colorText,
      }}
    >
      {nombre}
    </a>
  );
}

export default Button;
