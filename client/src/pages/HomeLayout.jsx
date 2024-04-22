import React from 'react'
import { Outlet } from 'react-router-dom'
import Bar from './Navbar/Bar'
import Footer from './Footer'

const HomeLayout = () => {
  return (
    <>
    <header>
      <Bar />
    </header>
    <Outlet />
    <Footer />
    </>
  )
}

export default HomeLayout