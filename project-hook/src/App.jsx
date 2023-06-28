
import './App.css'
import { useCats } from './hooks/useCats'


function App() {

  const {cats, isLoading} = useCats()

  return (
    <>
      {isLoading ? <h1>Loading...</h1> : cats.map(cat => <img key={cat.id} src={cat.url} alt="" />)}
    </>
  )
}

export default App
