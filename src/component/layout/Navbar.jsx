import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    return(
        <nav className="navbar">

            <NavLink to="/"
                     className={({isActive})=>
                    isActive ? "nav-link activo" : "nav-link"}   
            >
                Inicio
            </NavLink>

            <NavLink to="/contacts"
                     className={({isActive})=>
                    isActive ? "nav-link activo" : "nav-link"}
            
            >
                Contactos
            </NavLink>

            <NavLink to="/contacts/new"
                     className={({isActive})=>
                    isActive ? "nav-link activo" : "nav-link"}
            
            >
                Nuevo Contacto
            </NavLink>
        </nav>
    )
}

export default Navbar