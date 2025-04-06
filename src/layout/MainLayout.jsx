/* diseño pincipál */
/* se usara outlet  .. es para las otras paguinas quye estaran heredaran esta este principal diseño que obtenemos y por eso mismo   */
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'
import {Footer} from '../components/ui/Footer'
export const MainLayout = () => {

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>

    </>
  )
}
