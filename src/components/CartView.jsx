import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

const CartView = () => {
    const { cart, removeFromCart, clearCart, getTotalPrice, getCartQuantity } = useContext(CartContext)

    if(cart.length === 0){
        return (
            <div className="container my-5 text-center">
                <div className="alert alert-info" role="alert">
                    <h2>Tu carrito está vacío</h2>
                    <p className="mb-0">¡Agrega productos para comenzar tu compra!</p>
                </div>
                <Link className='btn btn-primary mt-3' to='/'>Ir a la tienda</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2 className="text-primary mb-4">Carrito de Compras</h2>
            <p className="text-muted">Total de productos: {getCartQuantity()} unidades</p>
            
            <div className="row">
                {cart.map((item) => (
                    <CartItem 
                        key={item.id} 
                        item={item} 
                        removeFromCart={removeFromCart}
                    />
                ))}
            </div>

            <div className="card mt-4">
                <div className="card-body">
                    <h4 className="text-end">Total: ${getTotalPrice()}</h4>
                    <div className="d-flex justify-content-between mt-3">
                        <button 
                            className="btn btn-secondary"
                            onClick={clearCart}
                        >
                            Vaciar Carrito
                        </button>
                        <Link className="btn btn-success" to='/checkout'>
                            Finalizar Compra
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartView