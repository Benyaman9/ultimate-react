import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import { CartContext } from '../../context/cartContext'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <Link to="/" className="logo"><h1>BenyaShop</h1></Link>
            <ul className="menu">
                <li><Link className='menu-link' to="/">Inicio</Link></li>
                <li><Link className='"menu-link"' to="/productos">Productos</Link></li>
                <li><Link className='"menu-link"' to="/productos/ropa">Ropa</Link></li>
                <li><Link className='"menu-link"' to="/productos/accesorios">Accesorios</Link></li>
                <li><Link className='"menu-link"' to="/productos/tecnologia">Tecnologia</Link></li>
                <li><Link className='"menu-link"' to="/productos/perfumes">Perfumes</Link></li>
                <li><Link className='"menu-link"' to="/nosotros">Nosotros</Link></li>
                <li><Link className='"menu-link"' to="/contacto">Contacto</Link></li>
                <li><CartWidget/></li>
            </ul>


        </nav>
    )
}

export default NavBar
