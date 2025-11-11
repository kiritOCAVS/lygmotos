

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart((prev) => [...prev, item])
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

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
