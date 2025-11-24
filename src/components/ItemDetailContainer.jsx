import React, { useState, useEffect } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams, Link } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../service/firebase';

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const { id } = useParams()
    const[cargando, setCargando]= useState(false)
    const [invalid, setInvalid]= useState(false)

    useEffect(()=>{
      setCargando(true)
      
      const docRef = doc(db, "productos",id)
      
      getDoc(docRef)
      .then((res)=>{
        if(res.data()){
          setDetalle({id:res.id, ...res.data()})
        }else{
          setInvalid(true)
        }
      })
      .catch((error)=> console.log(error))
      .finally(()=> setCargando(false))
    },[id])

   if(invalid){
    return (
      <div className='container my-5 text-center'>
        <div className='alert alert-warning' role='alert'>
            <h2>¡Producto no encontrado!</h2>
            <p>El producto que buscas no existe o fue eliminado.</p>
        </div>
        <Link className='btn btn-primary' to='/'>Volver al inicio</Link>
      </div>
    )
  }
  
  if(cargando){
    return (
        <div className='container my-5 text-center'>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
            </div>
            <p className='mt-2'>Cargando detalles del producto...</p>
        </div>
    )
  }

    return (
        <>
            <ItemDetail detalle={detalle} />
        </>
    )
}

export default ItemDetailContainer