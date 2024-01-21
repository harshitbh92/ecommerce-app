//type rafce to get the basic program
//<Outlet> -->  sholud be used in parent route elements to render their child route elements 
//
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
