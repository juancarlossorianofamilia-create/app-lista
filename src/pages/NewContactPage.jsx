function NewContactPage () {

    return (

        <section>

            <h1>Registrar nuevo contactos</h1>

             <form>

                 <div>
                    <label htmlFor="nombre">Nombre completo</label>
                    <input
                        type="text"
                        id="nombre"
                        placeholder="Escribe el nombre"
                    />
                </div>

                <div>
                <label htmlFor="correo">Correo electrónico</label>
                <input
                    type="email"
                    id="correo"
                    placeholder="ejemplo@correo.com"
                />
                </div>

                <div>
                <label htmlFor="telefono">Teléfono</label>
                <input
                    type="tel"
                    id="telefono"
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