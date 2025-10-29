import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function NavbarBS() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
             <img src= '../logoflash.jpg' alt="Logo" style={{ width: '3rem' }} />
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Cubiertas</Nav.Link>
            <Nav.Link href="#features">Cascos</Nav.Link>
            <Nav.Link href="#pricing">Accesorios</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarBS;