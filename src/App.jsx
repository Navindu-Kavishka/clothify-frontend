// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
import NavBar from './client/components/NavBar/NavBar'
import Home from './client/pages/Home/Home'

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <div>
          <Home/>
        </div>
      </div>
    </>
  )
}

export default App