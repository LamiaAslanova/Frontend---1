import React from 'react'
import Header from '../../layouts/site/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../layouts/site/Footer/Footer'

const SiteRoot = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default SiteRoot
