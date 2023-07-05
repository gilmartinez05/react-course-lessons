import { Link } from "wouter";
import useCart from "../hooks/useCart";


export default function Header() {


    const { cartList, totalCart } = useCart()

    return (
        <header className="topbar">
            <h1>Product Store</h1>
            <nav>
                <Link to={'/'}>
                    Home
                </Link>
                <Link to={'/cart'}>
                    Cart&nbsp;
                    {cartList.length > 0 &&
                        <span className="badge">
                            ${totalCart}
                            ({cartList.length})
                        </span>
                    }
                </Link>
            </nav>
        </header>
    )
}