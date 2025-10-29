import './css/App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/itemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBS from './components/NavbarBS';
import Item from './components/Item';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

return (
  <>
    {/* <Navbar /> */}
    <NavbarBS />
    <ItemDetailContainer />
    {/* <ItemListContainer saludo="¡Bienvenido a LyG Motos!" /> */}
    <ItemCount/>
  </>
)

}

export default App;
