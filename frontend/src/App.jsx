import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8080/')
      .then(res => {
        setMessage(res.data);
        console.log(res.data)
      })
      .catch(err => {
        setMessage("Error")
        // console.log(err)
      })
  })

  return (
    <>
      <h1>Hi from frontend!</h1>
      <p>{message}</p>
    </>
  )
}

export default App
