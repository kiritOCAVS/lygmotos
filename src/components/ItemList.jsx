import React from 'react';
import Item from './Item';
import { BsJustify } from 'react-icons/bs';

const ItemList = ({data}) => {
    return (
            <div style={{display: 'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}}>
            {data.map((prod, index) => <Item key={index} prod={prod} />)}
            </div>
    )
}
export default ItemList;