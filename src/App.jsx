
//import heroImg from './assets/hero.png'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
import { useState, useEffect } from 'react'
import '../src/styles/layout.css'
import './App.css'

//import Card from './component/card/card.jsx'
//import Header from './component/header/header.jsx'
//import Aside from './component/aside/aside.jsx'   
//import Welcome from './component/welcome/welcome.jsx'
//import Contador from './component/contador/contador.jsx'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ContactsPage from './pages/contactsPage.jsx'
import Navbar from './component/layout/Navbar.jsx'
import NewContactPage from './pages/NewContactPage.jsx'



//const opciones = [
  //{ id: 0, name: "Inicio", href: "#home", icon: "home" },
  //{ id: 1, name: "Equipo", href: "#about", icon: "team" },
  //{ id: 2, name: "Actividades", href: "#activities", icon: "activities" },
  //{ id: 3, name: "Ajustes", href: "#settings", icon: "settings" },
//];

//const datosTarjetas = [
  //{ id:0, 
    //nombre:"Gabriel Soriano", 
    //title:"Diseñadora UI/UX", 
    //description:"Especialista en crear interfaces modernas y experiencias intuitivas para usuarios.",
    //avatar: "/Avatares/Carlos Gomez.png",
    //nombreBoton: "Ver Perfil",
    //colorFondo: "#F3F4F6",
    //colorText: "#1F2937",
    //enlace: "/perfil/ana"
  //},

  //{
    //id:1,
    //nombre: "Carlos Pérez",
    //title: "Desarrollador Frontend",
    //description: "Apasionado por React, JavaScript y el diseño de aplicaciones web responsivas.",
    //avatar: "/Avatares/Juan Perez.png",
    //nombreBoton: "Contactar",
    //colorFondo: "#DBEAFE",
    //colorText: "#1E3A8A",
    //enlace: "/contacto/carlos"
  //},

  //{
    //id:2,
    //nombre: "Laura Gómez",
    //title: "Marketing Digital",
    //description: "Ayuda a las empresas a crecer mediante estrategias de redes sociales y SEO.",
    //avatar: "/Avatares/Ana Rodriguez.png",
    //nombreBoton: "Más Información",
    //colorFondo: "#FEF3C7",
    //colorText: "#92400E",
    //enlace: "/marketing/laura"
  //},

  //{
    //id:3,
    //nombre: "Miguel Santos",
    //title: "Analista Financiero",
    //description: "Experto en inversiones, presupuestos y planificación financiera personal.",
    //avatar: "/Avatares/Luis Martinez.png",
    //nombreBoton: "Ver Servicios",
    //colorFondo: "#D1FAE5",
    //colorText: "#065F46",
    //enlace: "/servicios/finanzas"
  //},
  //{
    //id:4,
    //nombre: "Sofía Martínez",
    //title: "Desarrolladora React",
    //description: "Construye aplicaciones modernas utilizando React, Vite y buenas prácticas.",
    //avatar: "/Avatares/Maria Lopez.png",
    //nombreBoton: "Explorar",
    //colorFondo: "#E0F2FE",
    //colorText: "#075985",
    //enlace: "/react/sofia"
  //}

//]


function App() {

  const [contactos, setContactos] = useState(() => {
    const datosGuardados = localStorage.getItem("contactos")
    return datosGuardados ? JSON.parse(datosGuardados) : []

  })

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos))
  },[contactos])

  //Funcion para eliminar un usuario
  const eliminarContacto = (id) => {
    setContactos((anterior) => 
    anterior.filter((contactos)=>contactos.id !== id))
  }

  // Función para importar contactos a nuestra agenda
  const agregarContacto = (nuevoContacto) => {
    setContactos((anterior) => {
      const existe = anterior.some(
        (contactos) => contactos.id === nuevoContacto.id
      );
      if (existe) return anterior;
      return [...anterior,nuevoContacto];
    })
  }

 
  //const cantidad = datosTarjetas.length

  return ( 
    <> 
      <Navbar/>
      
      <Routes>
        
          <Route
            
            path="/"
            element={<HomePage/>}

          />

          <Route
            
            path="/contacts"
            element={<ContactsPage 

              //Esta funcion conectamos el padre con los datos que vienen del hijo para crea los contactos
              contactos={contactos}
              //Esta funcion nos permite eliminar el contacto selecinado
              eliminarContacto={eliminarContacto}
              //Esta funcion nos permite agregar un contacto dese la Api
              agregarContacto={agregarContacto}

              />}

          />

          <Route
            
            path="/contacts/new"
            element={<NewContactPage setContactos={setContactos}/>}

          />

          <Route
            
            path="*"
            element={<h1>Pagina no aparece</h1>}

          />

      </Routes>

   </>

  )
}

export default App
