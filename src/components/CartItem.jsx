import React from 'react'

const CartItem = ({item, removeFromCart}) => {
  return (
    <div className="col-12 mb-3">
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
  )
}

export default CartItem
