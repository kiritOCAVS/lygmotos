import { use, useEffect, useState } from 'react';
import { getProductos } from '../mock/AsyncService';
import ItemList from './itemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ( props ) => {
    const[data, setData]= useState([])
    const {type} = useParams()
    console.log(type)


    useEffect(() => {
        getProductos()
        .then((res) => {
            if(type){
                setData(res.filter(prod => prod.category === type))
            }else{
                setData(res)
            }
        })
        .catch((err) => console.log(err, 'error'))
    }, [type])
    console.log(data, 'estado')
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