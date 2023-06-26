import { useParams } from "react-router-dom"

const About = () => {
    const { text } = useParams()
    return (
        <>
            <h1>About</h1>
            <p>
                {text}
            </p>
        </>

    )
}
export default About