export const useProducts = ({ _products, products, setProducts }) => {

    const search = (text) => {
        setProducts(() => {
            return _products.current.filter((product) => product.name.toLowerCase().includes(text.toLowerCase().trim()))
        })
    }

    return {
        products,
        search
    }
}