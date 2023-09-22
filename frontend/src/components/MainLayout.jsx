import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Login from '../pages/Login'
import CreateButton from './CreateButton'
import { Blogs } from './Blogs'

const MainLayout = () => {
  return (
    <div>
      <Header/>
      <CreateButton/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default MainLayout
