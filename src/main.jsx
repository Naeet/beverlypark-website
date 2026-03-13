import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/tailwind.css"

import AOS from "aos"
import "aos/dist/aos.css"

import { useEffect } from "react"

function Root() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return <App />
}

AOS.init({
  duration: 1000,
  once: true
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)