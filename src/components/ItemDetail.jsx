import React from 'react'
import ItemCount from './itemCount'

const ItemDetail = ({detalle}) => {
  return (
    <div>
        <h1>Detalle de: {detalle.name}</h1>
        <p>Precio: ${detalle.price},00</p>
        <p>Descripción: {detalle.description}</p>
        <img src={detalle.img} alt={detalle.name} style={{width:'300px'}}/>
        <ItemCount stock={detalle.stock}/>
    </div>
  )
}

export default ItemDetail