import { useContext, useMemo } from "react"
import { CartContext } from "../context/CartContext"


const useCart = () => {

    const { cartList, setCartList } = useContext(CartContext)

    const totalCart = useMemo(() => {
        return cartList.reduce((total, item) => {
            return Number((total + (item.quantity * item.price)).toFixed(2))
        }, 0)
    }, [cartList])

    const addProduct = (product) => {
        const item = cartList.find(item => item.id == product.id)
        if (item) {
            return updateProduct(product, item.quantity + 1)
        }
        setCartList((products) =>
            [...products, { ...product, quantity: 1 }]
        )
    }
    const updateProduct = (product, quantity) => {
        setCartList((list) => {
            return list.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: quantity }
                }
                return item
            })
        })
    }

    const removeProduct = (id) => {
        setCartList(products => {
            return products.filter(item => item.id !== id)
        })
    }

    return {
        cartList,setCartList, addProduct, removeProduct, updateProduct, totalCart
    }
}
export default useCart