import { useState } from 'react'
import LoginForm from './components/LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <LoginForm/>
    </div>
  )
}

export default App
