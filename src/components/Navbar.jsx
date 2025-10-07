import '../css/Navbar.css'

const Navbar = () => {
    return (
        <nav className ="nav-container">
            <a className='a-nav' href="">
            LyG Motos
            <img className='logoflash' src='../logoflash.jpg' alt='logo' />
            </a>
            <a href="">Cubiertas</a>
            <a href="">Cascos</a>
            <a href="">Accesorios</a>
        </nav>
    )
}
export default Navbar