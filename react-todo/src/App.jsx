import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CssBaseline } from '@mui/material'
import TodoList from './TodoList'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < CssBaseline /> {/* //Removes any CSS paddings from the browser. */}
      <Navbar/>
      <TodoList />

    </>
  )

}

export default App
