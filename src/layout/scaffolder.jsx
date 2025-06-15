import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Accueil from '../pages/accueil'
import { Outlet } from 'react-router-dom'

const Scaffolder = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Scaffolder