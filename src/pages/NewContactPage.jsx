import { useState } from "react"

function NewContactPage ({setContactos}) {

    const [contacto, setContacto] = useState({
        nombre:"",
        correo:"",
        telefono:""
    })

    const manejarCambio = (e) => {
        const {name, value} = e.target
        setContacto((anterior)=>({

            ...anterior,
            [name]: value
        }))
    }

    const manejarEnvio = (e) => {
        e.preventDefault()

        const nuevoContacto = {
            id: crypto.randomUUID(),
            ...contacto
        }

        setContactos((anterior) => [
            ...anterior,
            nuevoContacto
        ])
        
        setContacto({
            nombre:"",
            correo:"",
            telefono:""
        })
        
    }

    return (

        <section>

            <h1>Registrar nuevo contactos</h1>

             <form onSubmit={manejarEnvio}>

                 <div>
                    <label htmlFor="nombre">Nombre completo</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={contacto.nombre}
                        onChange={manejarCambio}    
                        placeholder="Escribe el nombre"
                    />
                </div>

                <div>
                    <label htmlFor="correo">Correo electrónico</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={contacto.correo}
                        onChange={manejarCambio}
                        placeholder="ejemplo@correo.com"
                    />
                </div>

                <div>
                    <label htmlFor="telefono">Teléfono</label>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={contacto.telefono}
                        onChange={manejarCambio}
                        placeholder="809-000-0000"
                    />
                </div>

                <button type="submit">
                    Guardar contacto
                </button>

             </form>


        </section>

       
    )
}

export default NewContactPage