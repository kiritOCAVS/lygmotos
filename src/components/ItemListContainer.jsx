import { useEffect, useState } from 'react';
import { getProductos } from '../mock/AsyncService';
import ItemList from './itemList';

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
            <h1 className="text-primary">{props.saludo}</h1>
            {/*data.map((prod, index) => <p key={index}>{prod.name}</p>)}*/}
            <ItemList data={data} />
        </div>
    )
}

export default ItemListContainer;