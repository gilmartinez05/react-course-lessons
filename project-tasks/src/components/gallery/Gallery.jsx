import { useState } from 'react'
import catsJson from './__mock__/cats.json'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
export default function Gallery(props) {
    const [cats, setCats] = useState(catsJson)
    const location = useLocation()
    const navigate = useNavigate()


    return (
        <section id="gallery">
            {
                cats.map((cat) => (
                    <article key={cat.id} onClick={() => navigate(`/image/${cat.id}`)}>
                        <div>
                            <img src={cat.url} alt={cat.name} />
                        </div>
                    </article>
                ))
            }
            <Outlet />
        </section>
    )
}
