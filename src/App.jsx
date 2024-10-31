// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
import Footer from './client/components/Footer/Footer'
import NavBar from './client/components/NavBar/NavBar'
import Product from './client/components/Product/Product'
//import Home from './client/pages/Home/Home'

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <div>
          {/* <Home/> */}
          <Product/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
