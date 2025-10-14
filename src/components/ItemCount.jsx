import {useState} from 'react'

const ItemCount = ({stock}) => {
    const [count, setCount]= useState(1)

const sumar = () => {
    if (count < stock) 
    setCount(count + 1)
}
const restar = () => {
    if (count > 1) {
        setCount(count - 1)
    }
}
  return (
    <div>
        <button onClick={() => restar()}>-</button>
        <span> CONTADOR {count} </span>
        <button onClick={() => sumar()}>+</button>
    </div>
  )
}

export default ItemCount