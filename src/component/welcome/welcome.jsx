import "./welcome.css"

function Welcome({icon,titulo,parafo,srcImagen}) {
   
    return (
       <div className="welcome">

            <div className="welcome-container">

                <div className="welcome-icono">
                    <i>{icon}</i>
                </div>

                <div className="welcome-saludo">
                    <h2>{titulo}</h2>
                    <p>{parafo}</p>
                </div>

            </div>

                        
            <img className="welcome-imagen" 
                src={srcImagen}
                alt="Imagen decorativa"
            />

       </div>
       
    );
}

export default Welcome