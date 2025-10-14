import './css/App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/itemCount'

function App() {

return (
  <>
    <Navbar />
    <ItemListContainer saludo="¡Bienvenido a LyG Motos!" />
    <ItemCount stock={7} />
  </>
)

}

export default App;
