
import { useState, useEffect } from "react";

function ContactsPage({ contactos, eliminarContacto, agregarContacto }) {

    // Estados para controlar la consulta a la API
    const [contactosAPI, setContactosAPI] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Consultar la API cuando se monta la página
    useEffect(() => {

        const obtenerContactos = async () => {

            try {
                setLoading(true);
                setError(null);

                const respuesta = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!respuesta.ok) {
                    throw new Error("No se pudieron cargar los contactos");
                }

                const datos = await respuesta.json();

                // Adaptamos los datos de la API y que su atributos estan en ingles
                const usuarios = datos.map((usuario) => ({
                    id: `api-${usuario.id}`,
                    nombre: usuario.name,
                    correo: usuario.email,
                    telefono: usuario.phone
                }));

                setContactosAPI(usuarios);

            } catch (error) {
                setError(error.message);

            } finally {
                setLoading(false);
            }
        };

        obtenerContactos();

    }, []);

    return (
        <section>

            <h1>Mis Contactos</h1>

            {contactos.length === 0 ? (
                <p>Aún no tienes contactos registrados</p>
            ) : (
                contactos.map((contacto) => (
                    <article key={contacto.id}>

                        <h3>{contacto.nombre}</h3>
                        <p>Correo: {contacto.correo}</p>
                        <p>Teléfono: {contacto.telefono}</p>

                        <button onClick={() => eliminarContacto(contacto.id)}>
                            Eliminar
                        </button>

                    </article>
                ))
            )}

            <hr />

            <h2>Contactos de ejemplo</h2>

            {loading && <p>Cargando contactos...</p>}

            {error && <p>{error}</p>}

            {!loading && !error && (
                contactosAPI.map((contacto) => {

                    const yaExiste = contactos.some(
                        (guardado) => guardado.id === contacto.id
                    );

                    return (
                        <article key={contacto.id}>

                            <h3>{contacto.nombre}</h3>
                            <p>Correo: {contacto.correo}</p>
                            <p>Teléfono: {contacto.telefono}</p>

                            <button
                                onClick={() => agregarContacto(contacto)}
                                disabled={yaExiste}
                            >
                                {yaExiste ? "Ya importado" : "Importar contacto"}
                            </button>

                        </article>
                    );
                })
            )}

        </section>
    );
}

export default ContactsPage;
