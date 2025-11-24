import {useState, useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemCount = ({stock, product, initial = 1}) => {
const [count, setCount] = useState(initial)
const [agregado, setAgregado] = useState(false)
const { addToCart } = useContext(CartContext)

const sumar = () => {
    if(count < stock){
        setCount(count + 1)
    }
}

const restar = () => {
    if(count > initial){
        setCount(count - 1)
    }
}

const agregarAlCarrito = () => {
    if(stock > 0){
        const item = {
            ...product,
            quantity: count
        }
        addToCart(item)
        setAgregado(true)
    }
}

  return (
    <div>
        {agregado ? (
            <div>
                <Link className='btn btn-primary me-2' to='/cart'>Ir al carrito</Link>
                <Link className='btn btn-secondary' to='/'>Seguir comprando</Link>
            </div>
        ) : (
            <>
                <div className='mb-3 d-flex align-items-center'>
                    <button className='btn btn-danger' onClick={restar} disabled={count <= initial}>-</button>
                    <span className='mx-3 fw-bold'>{count}</span> 
                    <button className='btn btn-success' onClick={sumar} disabled={count >= stock}>+</button>
                </div>
                <button className='btn btn-primary w-100' onClick={agregarAlCarrito} disabled={stock === 0}>
                    {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
                </button>
            </>
        )}
    </div>
  )
}

export default ItemCount