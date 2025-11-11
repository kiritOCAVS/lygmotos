import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartView = () => {
    const { cart, removeFromCart, clearCart, getTotalPrice } = useContext(CartContext)

    if(cart.length === 0){
        return (
            <div className="container my-5">
                <h2>Tu carrito está vacío</h2>
                <Link className='btn btn-primary mt-3' to='/'>Volver a la tienda</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2 className="text-primary mb-4">Carrito de Compras</h2>
            
            <div className="row">
                {cart.map((item) => (
                    <div key={item.id} className="col-12 mb-3">
                        <div className="card">
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img 
                                        src={item.img} 
                                        alt={item.name} 
                                        style={{width: '80px', height: '80px', objectFit: 'cover'}}
                                        className="me-3"
                                    />
                                    <div>
                                        <h5 className="card-title mb-1">{item.name}</h5>
                                        <p className="card-text mb-0">
                                            Cantidad: {item.quantity} | Precio: ${item.price}
                                        </p>
                                        <p className="card-text">
                                            Subtotal: ${item.price * item.quantity}
                                        </p>
                                    </div>
                                </div>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
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