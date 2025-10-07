import './App.css'
import Navbar from './components/Navbar'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/itemListContainer'

function App() {

return (
  <>
    <Navbar />
    <CartWidget />
    <ItemListContainer greeting="¡Bienvenido a LyG Motos!" />
  </>
)

}

export default App
