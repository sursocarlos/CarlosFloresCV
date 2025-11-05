import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header";
import Sobre_mi from './components/Sobre_mi';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Sobre_mi/>
    </div>
  )
}

export default App
