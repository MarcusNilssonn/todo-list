import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CssBaseline } from '@mui/material'
import TodoList from './TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     < CssBaseline /> {/* //Removes any CSS paddings from the browser. */}
     <h1>ToDos</h1>
     <TodoList/>
    </>
  )
  
}

export default App
