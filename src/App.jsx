import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import './App.css'
import Text from './Components/text'
import Cart from './Components/Cart'
import ImageGallery from './Components/imageGallery'
import Photos from './Components/Photos'

function App() {
  const [count, setCount] = useState(0)
// ui is renewed
  return (
    <>
    <Navbar />
    <div className='flex'>
    <Photos />
    <Text />
    </div>
    </>
  )
}

export default App;
