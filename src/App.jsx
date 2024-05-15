import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col'>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
        <Main />
      </div>
      <div className='pl-28'>  
        <Footer />
      </div>
    </div>
  )
}

export default App
