import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { use } from 'react'

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [secondMail, setSecondMail]= useState('')
    const { cart }= useContext(CartContext)

    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    console.log(buyer)
    const finalizarCompra = (e) => {
        e.preventDefault()

        let order = {
            comprador: buyer,
            compras: cart,
            total: total(),
            fecha: serverTimestamp()
        }

        const ventas= collection(db, "orders")
        addDoc(ventas, order)
        .then((res)=> {
            console.log(res.id)
        })

    return (
        <div>
            <h2>Complete con sus datos</h2>
            <form className='p-4 border rounded shadow-sm bg-light'>
                <input className='form-control' name='name' type='text' placeholder='Ingresa tu Nombre' onChange={buyerData} />
                <input className='form-control' name='lastname' type='text' placeholder='Ingresa tu Apellido' onChange={buyerData} />
                <input className='form-control' name='address' type='email' placeholder='Ingresa tu Dirección' onChange={buyerData} />
                <input className='form-control' name='email' type='text' placeholder='Ingresa tu Email' onChange={buyerData} />
                <input className='form-control' name='secondMail' type='text' placeholder='Repite tu Email' onChange={(e) => setSecondMail(e.target.value)} />
                {secondMail !== buyer.email && <span className='text-danger'>Los emails no coinciden</span>}
                <button className='btn btn-primary mt-3' type='submit'>Finalizar Compra</button>
            </form>
        </div>
    )
}

return (
    <>
    {
        orderId
        ? <div>
            <h2>Gracias por tu compra!</h2>
            <p>Tu número de orden es: {orderId}</p>
          </div>
          :<div>
            <h2>Complete con sus datos</h2>
            <form className='p-4 border rounded shadow-sm bg-light'>
                <input className='form-control' name='name' type='text' placeholder='Ingresa tu Nombre' onChange={buyerData} />
                <input className='form-control' name='lastname' type='text' placeholder='Ingresa tu Apellido' onChange={buyerData} />
                <input className='form-control' name='address' type='email' placeholder='Ingresa tu Dirección' onChange={buyerData} />
                <input className='form-control' name='email' type='text' placeholder='Ingresa tu Email' onChange={buyerData} />
                <input className='form-control' name='secondMail' type='text' placeholder='Repite tu Email' onChange={(e) => setSecondMail(e.target.value)} />
                {secondMail !== buyer.email && <span className='text-danger'>Los emails no coinciden</span>}
                <button className='btn btn-primary mt-3' type='submit'>Finalizar Compra</button>
            </form>
          </div>
    }
    </>
)

export default Checkout