import { useEffect, useState } from 'react';
import { getProductos } from '../mock/AsyncService';

const ItemListContainer = ( props ) => {
    const[data, setData]= useState([])
    useEffect(() => {
        getProductos()
        .then((res) => setData(res))
        .catch((err) => console.log(err, 'error'))
    }, [])
    console.log(data, 'estado')
    return (
        <div>
            <h1>{props.saludo}</h1>
           {/* {data.map((prod, index) => <p key={index}>{prod.name}</p>)} */}
           
        </div>
    )
}

export default ItemListContainer;