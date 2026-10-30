
//import heroImg from './assets/hero.png'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import { useState, useEffect } from 'react'
import './App.css'
import '../src/styles/layout.css'
import Card from './component/card/card.jsx'
import Header from './component/header/header.jsx'
import Aside from './component/aside/aside.jsx'   
import Welcome from './component/welcome/welcome.jsx'
import Contador from './component/contador/contador.jsx'


const opciones = [
  { id: 0, name: "Inicio", href: "#home", icon: "home" },
  { id: 1, name: "Equipo", href: "#about", icon: "team" },
  { id: 2, name: "Actividades", href: "#activities", icon: "activities" },
  { id: 3, name: "Ajustes", href: "#settings", icon: "settings" },
];

const datosTarjetas = [
  { id:0, 
    nombre:"Gabriel Soriano", 
    title:"Diseñadora UI/UX", 
    description:"Especialista en crear interfaces modernas y experiencias intuitivas para usuarios.",
    avatar: "/Avatares/Carlos Gomez.png",
    nombreBoton: "Ver Perfil",
    colorFondo: "#F3F4F6",
    colorText: "#1F2937",
    enlace: "/perfil/ana"
  },

  {
    id:1,
    nombre: "Carlos Pérez",
    title: "Desarrollador Frontend",
    description: "Apasionado por React, JavaScript y el diseño de aplicaciones web responsivas.",
    avatar: "/Avatares/Juan Perez.png",
    nombreBoton: "Contactar",
    colorFondo: "#DBEAFE",
    colorText: "#1E3A8A",
    enlace: "/contacto/carlos"
  },

  {
    id:2,
    nombre: "Laura Gómez",
    title: "Marketing Digital",
    description: "Ayuda a las empresas a crecer mediante estrategias de redes sociales y SEO.",
    avatar: "/Avatares/Ana Rodriguez.png",
    nombreBoton: "Más Información",
    colorFondo: "#FEF3C7",
    colorText: "#92400E",
    enlace: "/marketing/laura"
  },

  {
    id:3,
    nombre: "Miguel Santos",
    title: "Analista Financiero",
    description: "Experto en inversiones, presupuestos y planificación financiera personal.",
    avatar: "/Avatares/Luis Martinez.png",
    nombreBoton: "Ver Servicios",
    colorFondo: "#D1FAE5",
    colorText: "#065F46",
    enlace: "/servicios/finanzas"
  },
  {
    id:4,
    nombre: "Sofía Martínez",
    title: "Desarrolladora React",
    description: "Construye aplicaciones modernas utilizando React, Vite y buenas prácticas.",
    avatar: "/Avatares/Maria Lopez.png",
    nombreBoton: "Explorar",
    colorFondo: "#E0F2FE",
    colorText: "#075985",
    enlace: "/react/sofia"
  }

]


function App() {
 
  const cantidad = datosTarjetas.length

  return (  
    <>
    <section className="App2">
      
      <Aside opciones={opciones} />

      <main className="contenido-principal">
        
        <Header />

        <Welcome
          icon="👋"
          titulo="¡Bienvenido al TeamBoard!"
          parafo="Aquí tienes un resumen de las actividades aprendidas en clases."
          srcImagen="/Designer.png"
        />

        <section id="about" className="seccion">

          <div className='tareas'>

            <h2>Tarea: Uso de Componentes y Props</h2>
            <p className='cantidad'>Cantidad de tarjetas: {cantidad}</p>

          </div>
          

          <div className="contenedor-tarjetas">
            {datosTarjetas.map((e) => (<Card key={e.id} avatar={e.avatar} nombre={e.nombre} title={e.title} description={e.description} nombreBoton={e.nombreBoton} colorFondo={e.colorFondo} colorText={e.colorText} enlace={e.enlace} />))}
          </div>
        </section>

        <section id="activities" className="seccion">
          <h2>Actividades recientes</h2>
          <Contador/>

          {/* Aquí pondrás el componente de listado */}
        </section>

      </main>
      
  </section>
      
        
    </>
  )
}

export default App
