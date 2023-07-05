import ProductItem from "./ProductItem";

export default function ProductList({products}) {

    return (
        <>
            <header>
                <h2>Products</h2>
            </header>
            <div className="product-list">
                {products.map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>
        </>

    )


}