import { useRef, useState } from "react"
import ProductList from "./ProductList"
import Search from "./Search"
import ProductsData from "../__mock__/products.mock.json"
export default function Products() {


    const _products = useRef(ProductsData)
    const [products, setProducts] = useState(ProductsData)

    return (
        <>
            <section id="section-search">
                <Search _products={_products} products={products} setProducts={setProducts} />
            </section>
            <section id="section-products">
                <ProductList products={products} />
            </section>
        </>

    )
}