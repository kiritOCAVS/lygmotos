import React from 'react'
import ItemCount from './itemCount'

const ItemDetail = ({detalle}) => {
  return (
    <div className='container my-5'>
        <div className='row'>
            <div className='col-md-6'>
                <img src={detalle.img} alt={detalle.name} style={{width:'100%', maxWidth: '400px'}}/>
            </div>
            <div className='col-md-6'>
                <h1>{detalle.name}</h1>
                <p className='h3 text-success'>Precio: ${detalle.price}</p>
                <p className='text-muted'>Stock disponible: {detalle.stock}</p>
                <p>{detalle.description}</p>
                <ItemCount stock={detalle.stock} product={detalle}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail