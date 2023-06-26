import { Navigate } from 'react-router-dom';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './App.css'
import {
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {

  const [isLogged, setIsLogged] = useState(false)
  return (
    <>
      <main>
        <header>
          <h1>Routing: {isLogged ? 'Logged' : 'Not Logged'}</h1>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about/text">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            { isLogged ? <NavLink to="/profile">Profile</NavLink> : null}
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home setIsLogged={setIsLogged} />} />
          <Route path='/about/:text' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={isLogged ? <Contact /> : <Navigate to="/about/unauthorized" />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </main>
    </>
  )
}

export default App
