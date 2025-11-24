import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = ()=>{
    const { getCartQuantity } = useContext(CartContext)
    const quantity = getCartQuantity()
    
    return (
        <Link to='/cart' style={{textDecoration: 'none', color: 'white', position: 'relative'}}>
         <FaShoppingCart fontSize="1.7rem" />
         {quantity > 0 && (
            <Badge 
                pill 
                bg="danger" 
                style={{
                    position: 'absolute', 
                    top: '-5px', 
                    right: '-10px',
                    fontSize: '0.75rem'
                }}
            >
                {quantity}
            </Badge>
         )}
        </Link>
    );
};

export default CartWidget;