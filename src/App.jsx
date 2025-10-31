import './css/App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/itemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBS from './components/NavbarBS';
import Item from './components/Item';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';

function App() {

return (
  <BrowserRouter>
    {/* <Navbar /> */}
    <NavbarBS />
    <Routes>
      <Route path='/' element={<ItemListContainer saludo="¡Bienvenido a LyG Motos!" />} />
      <Route path='/category/:type' element={<ItemListContainer saludo="Bienvenido a:" />} />
      <Route path='/item/:id' element={<ItemDetailContainer />} />
      <Route path='*' element={<Error />} />
    </Routes>
    {/* <ItemDetailContainer /> */}
    {/* <ItemCount/> */}

  </BrowserRouter>
)

}

export default App;
