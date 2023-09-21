import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Login from '../pages/Login'
import CreateButton from './CreateButton'

const MainLayout = () => {
  return (
    <div>
      <Header/>
      <CreateButton/>
      <Footer/>
    </div>
  )
}

export default MainLayout
