import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';

const CartWidget = ()=>{
    return (
        <>
         <FaShoppingCart fontSize="1.7rem" />
         <Badge pill bg="danger">0</Badge>
        </>
    );
};

export default CartWidget;