import { useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import Gallery from './components/gallery/Gallery'
import UserForm from './components/form/UserForm'
import Image from './components/gallery/Image'


function App() {
  const navigate = useNavigate()

  return (
    <>
      <main>
        <header>
          <h1>Tasks</h1>
          <nav>
            <button onClick={() => navigate("/")}>Gallery</button>
            <button onClick={() => navigate("/form")}>User Form</button>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Gallery />}>
            <Route path="/image/:id" element={<Image />} />
          </Route>
          <Route path='/form' element={<UserForm />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </main>
    </>
  )
}

export default App
