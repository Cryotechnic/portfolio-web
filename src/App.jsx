import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Alert } from 'flowbite-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Alert color="info">
      <span>
        <span className="font-medium">
          Info alert!
        </span>
        {' '}Change a few things up and try submitting again.
      </span>
    </Alert>
  )
}

export default App
