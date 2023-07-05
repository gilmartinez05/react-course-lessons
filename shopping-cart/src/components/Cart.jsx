import useCart from "../hooks/useCart";

export default function Cart() {
    const { cartList, totalCart, updateProduct, removeProduct } = useCart()

    const updateQuantity = (product, event) => {
        updateProduct(product, event.target.valueAsNumber)
    }

    return (
        <>
            <header>
                <h2>Cart</h2>
            </header>
            <section id="cart-products-section">
                <ul className="cart-products-list">
                    {cartList.map(product => (
                        <li key={product.id}>
                            <div className="cart-products-item">
                                <div className="cart-products-image-container">
                                    <img src={product.image} alt="Product Image" />
                                </div>
                                <div>

                                    <div className="cart-products-product-container">
                                        <h4>{product.name}</h4>
                                        <div className="cart-products-details">
                                            <label>Quantity:</label>
                                            <input className="sm" type="number" defaultValue={product.quantity} onChange={(event) => updateQuantity(product, event)} />
                                            <button className="sm" onClick={() => removeProduct(product.id)}>X</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-products-price">
                                ${(product.quantity * product.price).toFixed(2)}
                            </div>
                        </li>
                    ))}
                    {cartList.length == 0 && <div>There are no products in the cart.</div>}
                </ul>
            </section>
            <section id="cart-products-total-section">
                <h3 className="cart-products-price">Total: ${totalCart.toFixed(2)}</h3>
            </section>
        </>
    )
}