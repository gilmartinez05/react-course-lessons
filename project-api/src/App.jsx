import { useState } from 'react'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import RandomWord from './components/RandomWord'
import Form from './components/Form'
import Filter from './components/Filter'

function App() {
  const [isSearching, setIsSearching] = useState(true)

  const doSearch = () => {
    setIsSearching(true)
  }
  return (
    <main>
      <header>
        <nav>
          <NavLink to="/">Random Word</NavLink>
          <NavLink to="/form">Form</NavLink>
          <NavLink to="/filter">Filter</NavLink>
        </nav>

      </header>
      <div>
        <button onClick={doSearch}>Buscar de nuevo</button>
      </div>
      <section>
        <Routes>
          <Route path="/" element={<RandomWord />} />
          <Route path="/random-word" element={<RandomWord />} />
          <Route path="/form" element={<Form />} />
          <Route path="/filter" element={<Filter isSearching={isSearching} setIsSearching={setIsSearching} />} />
        </Routes>
      </section>

    </main>
  )
}

export default App
