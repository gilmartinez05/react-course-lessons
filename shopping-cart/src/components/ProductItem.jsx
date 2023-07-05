import useCart from "../hooks/useCart"

export default function ProductItem({ product }) {

    const { addProduct } = useCart()

    return (
        <article>
            <header>
                <h3>{product.name}</h3>
            </header>
            <section>
                <span>{product.description}</span>
            </section>
            <footer>
                <span className="price">${product.price.toFixed(2)}</span>
                <button className="primary sm" onClick={() => addProduct(product)}>Add to Cart</button>
            </footer>
        </article>
    )
}