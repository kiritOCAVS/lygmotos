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
    const [invalidId, setInvalidId] = useState(false);
    const [invalid, setInvalid]= useState(false);


//FIREBASE

    useEffect(()=>{

      setCargando(true)

      //referencia de un documento

      const docRef = doc(db, "productos",id)

      //traer el documento

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


   // useEffect(() => {
     //   getOneProduct(id)
       //     .then(res => setDetalle(res))
         //   .catch((error) => console.log(error))
   // }, [id])

   if(invalid){

    return <div>

      <h1> El producto no existe! </h1>

      <Link className='btn btn-primary' to='/'>Volver a home</Link>

    </div>

  }

    return (
        <>
            <ItemDetail detalle={detalle} />
        </>
    )
}

export default ItemDetailContainer