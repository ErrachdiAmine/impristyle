import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Scaffolder from './layout/scaffolder'
import Produits from './pages/produits'
import { RouterProvider, Route, Router, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Accueil from './pages/accueil'


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Scaffolder/>} >

      <Route path='/' element={<Accueil/>} />      
      <Route path='/produits' element={<Produits/>} />      
    </Route>
  ))


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
