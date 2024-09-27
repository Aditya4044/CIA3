import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Navbar from './Navbar'
import Products from './Products'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App