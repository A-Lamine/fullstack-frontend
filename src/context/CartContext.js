import { createContext, useState, useEffect } from "react";

const CartContext = createContext({
    cart: [],
    removeItem: () => {},
    addItem: () => {},
    clearCart:() => {},
    count: 0
})

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const count = cart.length || 0;

    const addItem = (item) => {
        console.log(item);
        setCart([...cart, item])
    }

    const context = { cart, count, addItem }

    useEffect(() => {
        const cartStored = localStorage.getItem('cart') || [];
        setCart(cartStored);
    }, []);

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;