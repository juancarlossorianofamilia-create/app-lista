import "./contador.css"
import CmdBottun from "../cmdButton/CmdButton"
import Lista from "../listas/Lista";
import { useState } from "react"


function Contador () {

    //Control del Contador
    const [cuenta, setCuenta] = useState(0);
    const [peso, setPeso] = useState(1);

    
    // Historial: comienza vacío
    const [lista, setLista] = useState([]);

    // Registrar un movimiento
    const agregarHistorial = (accion,cantidad, resultado) => {
        const nuevoRegistro = {
            id: Date.now(),//crypto.randomUUID()
            hora: new Date().toLocaleDateString("es-DO"),
            accion:accion,
            cantidad:cantidad,
            resultado:resultado
        };

        setLista((historialAnterior) => [
            nuevoRegistro,...historialAnterior
        
        ]);
  
    };

     //Funciones de operaciones
    const sumar = () => {
        const resultado = cuenta + peso
        setCuenta(resultado);
        agregarHistorial(`+${peso}`, `+${peso}`, resultado)

    };

    const restar = () => {
        const resultado = cuenta - peso
        setCuenta(resultado);
        agregarHistorial(`-${peso}`, `-${peso}`, resultado)

    };

    const resetear = () => {
        setCuenta(0);
        agregarHistorial("Resetear (0)", "0", 0)

    };

    //Atajos
    const irAcero = () => {
        setCuenta(0);
        agregarHistorial("Ir a 0","0",0)
    }

     const irAlamitad = () => {
        setCuenta(50);
        agregarHistorial("Ir a 50","0",50)
    }

     const irAlcien = () => {
        setCuenta(100);
        agregarHistorial("Ir a 100","0",100)
    }

    //Limpier Historial
    const limpiarHistorial = () => {

        if (lista.length > 0) {

            setLista([])
            agregarHistorial("Historial limpiado","", cuenta)
            
        }
         
    }

    return (

        <>

            <section className="contenedor-contador">

                <div className="contenedor-contador-main">

                    <header className="header-contador">
                        
                        <h3>Contador TeamBoard</h3>
                        
                        <div className="header-contador-menu">
                            <span>Peso:</span>
                            <nav>
                                <ul>

                                    <li className={peso === 1 ? "Activo" : ""} onClick={()=>setPeso(1)}>± 1</li>

                                    <li className={peso === 5 ? "Activo" : ""} onClick={() => setPeso(5)}>± 5</li>

                                    <li className={peso === 10 ? "Activo" : ""} onClick={() => setPeso(10)}>± 10</li>

                                </ul>
                            </nav>

                        </div>
                    
                    </header>
                
                    <section className="contendor-main">

                        <span className="contenedor-main-patalla"><strong>{cuenta}</strong> </span>
                        <div className="contenedor-main-patalla-lista">
                            <ul>
                                <li>Valor inical: 0</li>
                                <li className="contenedor-main-variacion">Variacción: <strong>{peso}</strong></li>

                            </ul>
                        </div>

                        <article className="contenedor-main-botones">

                            <CmdBottun

                                texto={"+ Sumar"}
                                colorTexto={"#FFFFFF"}
                                coloFondo={"#0EA5E9"}
                                padding="20px 45px"
                                onClick={sumar}
                            
                            />

                            <CmdBottun

                                texto={"- Restar"}
                                colorTexto={"#FFFFFF"}
                                coloFondo={"#EF4444"}
                                padding="20px 45px"
                                onClick={restar}
                             
                            />

                             <CmdBottun

                                texto={"Resetear"}
                                colorTexto={"#FFFFFF"}
                                coloFondo={"#0F172A"}
                                padding="20px 45px"
                                onClick={resetear}
                            
                            />
                        
                        </article>

                        <footer className="contenedor-footer">
                            
                            <p>Odjetivo recomendado: <strong>100</strong></p>

                            <div className="contenedor-footer-opciones">

                                <p>Ir directo a: <span className="contenedor-footer-ir" onClick={irAcero}> <strong>0</strong></span></p>
                                <p> <strong>Ir directo a: </strong><span className="contenedor-footer-ir" onClick={irAlamitad}><strong>0</strong></span></p>
                                <p className="contenedor-footer-ir" onClick={irAlcien}> <strong>100</strong></p>

                            </div>
                            
                        </footer>
                        
                    </section>
                
                </div>    

            
            <section className="contenedor-main-historial">

                    <article>
                    <header>
                        <h3>🕒 Historial</h3>
                        <span className="contenedor-main-historial-limpiar" onClick={limpiarHistorial}>Limpiar</span>
                    </header>
                    <section className="lista-historial">
                        {lista.map((registro, indice) => (
                        <Lista
                            key={indice}
                            texto={registro.accion}
                            valor={registro.resultado}
                            hora={registro.hora}
                        />
                        ))}
                        
                    </section>
                </article>
                
            </section>
            
            
            
            
            </section>
            
       
            
        
        </>
    )
}

export default Contador