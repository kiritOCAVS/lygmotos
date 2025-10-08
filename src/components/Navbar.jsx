import '../css/Navbar.css'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <nav className ="nav-container">
            <a className='a-nav' href="">
            <img src= '../logoflash.jpg' alt='logo' className='logo'/>
            
            </a>
            <a className='a-nav' href="">Cubiertas</a>
            <a className='a-nav' href="">Cascos</a>
            <a className='a-nav' href="">Accesorios</a>
            <CartWidget />
        </nav>
    )
}
export default Navbar