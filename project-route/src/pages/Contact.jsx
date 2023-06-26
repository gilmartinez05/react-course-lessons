import { useLocation } from "react-router-dom"

const Contact = () => {
    const location = useLocation()

    return (
        <>

            <h1>Contact</h1>
            <p>From state: {location.state?.name ?? 'no state'}</p>
        </>

    )
}
export default Contact