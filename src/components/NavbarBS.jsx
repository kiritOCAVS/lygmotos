import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavbarBS() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
             <img src= '../logoflash.jpg' alt="Logo" style={{ width: '3rem' }} />
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link 
              as={NavLink} 
              to="/category/cubiertas"
              style={({isActive}) => isActive ? {fontWeight: 'bold', textDecoration: 'underline'} : {}}
            >
              Cubiertas
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/category/cascos"
              style={({isActive}) => isActive ? {fontWeight: 'bold', textDecoration: 'underline'} : {}}
            >
              Cascos
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/category/accesorios"
              style={({isActive}) => isActive ? {fontWeight: 'bold', textDecoration: 'underline'} : {}}
            >
              Accesorios
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarBS;