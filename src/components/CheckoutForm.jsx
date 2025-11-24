import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'

const CheckoutForm = () => {
    const [buyer, setBuyer] = useState({})
    const [secondMail, setSecondMail]= useState('')
    const [orderId, setOrderId] = useState(null)
    const { cart, getTotalPrice, clearCart }= useContext(CartContext)

    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    //console.log(buyer)
    
    const finalizarCompra = (e) => {
        e.preventDefault()

        if(buyer.email !== secondMail){
            alert('Los emails no coinciden')
            return
        }

        let order = {
            comprador: buyer,
            compras: cart,
            total: getTotalPrice(),
            fecha: serverTimestamp()
        }

        const ventas= collection(db, "orders")
        addDoc(ventas, order)
        .then((res)=> {
            console.log(res.id)
            setOrderId(res.id)
            clearCart()
        })
        .catch((error) => console.log(error))
    }

    if(cart.length === 0 && !orderId){
        return (
            <div className='container my-5 text-center'>
                <div className='alert alert-warning' role='alert'>
                    <h2>Tu carrito está vacío</h2>
                    <p>Agrega productos antes de realizar una compra</p>
                </div>
                <Link className='btn btn-primary' to='/'>Ir a la tienda</Link>
            </div>
        )
    }

    return (
        <>
        {
            orderId
            ? <div className='container my-5 text-center'>
                <div className='alert alert-success' role='alert'>
                    <h2>¡Gracias por tu compra!</h2>
                    <hr />
                    <p className='mb-0'>Tu número de orden es:</p>
                    <h4 className='mt-2 mb-3'><strong>{orderId}</strong></h4>
                    <p className='text-muted'>Guarda este número para seguimiento de tu pedido</p>
                </div>
                <Link className='btn btn-primary' to='/'>Volver al inicio</Link>
              </div>
              :<div className='container my-5'>
                <h2>Complete con sus datos</h2>
                <form className='p-4 border rounded shadow-sm bg-light' onSubmit={finalizarCompra}>
                    <input className='form-control mb-2' name='name' type='text' placeholder='Ingresa tu Nombre' onChange={buyerData} required />
                    <input className='form-control mb-2' name='lastname' type='text' placeholder='Ingresa tu Apellido' onChange={buyerData} required />
                    <input className='form-control mb-2' name='address' type='text' placeholder='Ingresa tu Dirección' onChange={buyerData} required />
                    <input className='form-control mb-2' name='email' type='email' placeholder='Ingresa tu Email' onChange={buyerData} required />
                    <input className='form-control mb-2' name='secondMail' type='email' placeholder='Repite tu Email' onChange={(e) => setSecondMail(e.target.value)} required />
                    {secondMail && buyer.email && secondMail !== buyer.email && <span className='text-danger d-block mb-2'>Los emails no coinciden</span>}
                    <button className='btn btn-primary mt-3' type='submit' disabled={!buyer.email || buyer.email !== secondMail}>Finalizar Compra</button>
                </form>
              </div>
        }
        </>
    )
}

export default CheckoutForm