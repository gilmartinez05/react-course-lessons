import { useNavigate } from "react-router-dom"

const Home = ({setIsLogged}) => {

    const navigate = useNavigate()
    const gotoContact = () => {
        setIsLogged((isLogged)=>{
            return !isLogged
        })
    }

    return (
        <>
            <h1>Home</h1>
            
            <button onClick={gotoContact}>go to Contact</button>
        </>
    )
}
export default Home