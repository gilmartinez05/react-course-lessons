import { useRef } from "react"
import { useProducts } from "../hooks/useProducts"

export default function Search({ _products, products, setProducts }) {

    const { search } = useProducts({ _products, products, setProducts })
    const inputSearch = useRef(null)

    const handleSearch = () => {
        const text = inputSearch.current?.value
        search(text ?? '')
    }

    return (
        <header className="search-bar">
            <div className="search-bar__container">
                <input ref={inputSearch} className="sm" type="text" placeholder="Search..." />
                <button className="sm" onClick={handleSearch}>Search</button>
            </div>
        </header>
    )
}