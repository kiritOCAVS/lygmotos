import { useEffect, useState } from 'react';
import ItemList from './itemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../service/firebase';

const ItemListContainer = ( props ) => {
    const[data, setData]= useState([])
    const[loader, setLoader]= useState(false)
    const {type} = useParams()

    useEffect(() => {
        setLoader(true);
        const productCollection = type 
        ? query(collection(db, "productos"), where("category", "==", type)) 
        : collection(db, "productos");
        
        getDocs(productCollection)
        .then((res) => {
            //console.log(res.docs);
            const list = res.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            setData(list)
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => setLoader(false));
    }, [type])
    
    return (
        <div className='container'>
            <h1 className="text-primary">
            {props.saludo}
            {type && (
            <span>
            {' '}
             {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
         )}
            </h1>
            {loader ? (
                <div className='text-center my-5'>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                    <p className='mt-2'>Cargando productos...</p>
                </div>
            ) : data.length === 0 ? (
                <div className='alert alert-info my-4' role='alert'>
                    <p className='mb-0'>No hay productos disponibles en esta categoría</p>
                </div>
            ) : (
                <ItemList data={data} />
            )}
        </div>
    )
}

export default ItemListContainer;