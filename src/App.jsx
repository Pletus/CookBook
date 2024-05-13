import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
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
      </div>
      <div>  
        <Footer />
      </div>
    </div>
  )
}

export default App
