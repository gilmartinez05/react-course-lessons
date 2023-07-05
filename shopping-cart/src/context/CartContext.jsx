import { createContext, useEffect, useState } from "react"

export const CartContext = createContext({})

export default function CartProvider({ children }) {

    const [cartList, setCartList] = useState(() => {
        const cartList = JSON.parse(localStorage.getItem('cartList'))
        if (cartList) {
            return cartList
        } else {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('cartList', JSON.stringify(cartList))
    }, [cartList])

    return (
        <CartContext.Provider value={{ cartList, setCartList }}>
            {children}
        </CartContext.Provider>
    )
}