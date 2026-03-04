import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ClassList} from './components/ClassList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClassList></ClassList>
    </>
  )
}

export default App
