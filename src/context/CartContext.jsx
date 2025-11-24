import { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart((prev) => {
            const existe = prev.find(prod => prod.id === item.id)
            if(existe){
                return prev.map(prod => 
                    prod.id === item.id 
                    ? {...prod, quantity: prod.quantity + item.quantity}
                    : prod
                )
            } else {
                return [...prev, item]
            }
        })
    }

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter(item => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    const getCartQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0)
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    return (
        <CartContext.Provider value={{ 
            cart, 
            addToCart, 
            removeFromCart, 
            clearCart, 
            getTotalPrice, 
            getCartQuantity,
            isInCart 
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
