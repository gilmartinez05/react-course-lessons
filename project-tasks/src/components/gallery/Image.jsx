import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import jsonCats from './__mock__/cats.json'
export default function Image() {

    const { id } = useParams()
    const [image, setImage] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        const image = jsonCats.find(cat => cat.id === id)
        setImage(image)
    }, [id])

    const closeModal = () => {
        navigate('/')
    }
    return (
        <div className="modal">
            <div className="modal-container">
               
                <div className="modal-body">
                    <img src={image.url} alt={image.id} />
                </div>
                <footer>
                    <button onClick={closeModal}>Close</button>
                </footer>
            </div>
        </div>
    )
}
