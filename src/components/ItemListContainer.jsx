import { use, useEffect, useState } from 'react';
import { getProductos } from '../mock/AsyncService';
import ItemList from './itemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../service/firebase';

const ItemListContainer = ( props ) => {
    const[data, setData]= useState([])
    const[loader, setLoader]= useState(false)
    const {type} = useParams()
   // console.log(type)

    useEffect(() => {
        setLoader(true);
        const productCollection = type 
        ? query(collection(db, "productos"), where("category", "==", type)) 
        : collection(db, "productos");
        getDocs(productCollection)
        .then((res) => {
            console.log(res.docs);
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

    // useEffect(() => {
    //    getProductos()
     //   .then((res) => {
    //        if(type){
     //           setData(res.filter(prod => prod.category === type))
     //       }else{
     //           setData(res)
     //       }
     //  })
    //  .catch((err) => console.log(err, 'error'))
    //  }, [type])
    
    // console.log(data, 'estado')
    
    return (
        <div>
            <h1 className="text-primary">
            {props.saludo}
            {type && (
            <span>
            {' '}
             {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
         )}
            </h1>
            {/*<h1 className="text-primary">{props.saludo}{type && <span> {type}</span>}</h1>
            {/*data.map((prod, index) => <p key={index}>{prod.name}</p>)}*/}
            <ItemList data={data} />
        </div>
    )
}

export default ItemListContainer;