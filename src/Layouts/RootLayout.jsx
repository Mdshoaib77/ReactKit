import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Pages/Navbar/Navbar'
import Footer from '../Pages/Footer/Footer'

const RootLayout = () => {
  return (
    <div>
        <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout
