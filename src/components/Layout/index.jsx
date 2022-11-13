import {Outlet} from 'react-router-dom'
import Header from '../Header'
import './layout.css'


import React from 'react'

const Layout = () => {
  return (
    <div className='appWrapper'>
        <Header />
        <div className="mainPage">
            <Outlet />
        </div>
    </div>
  )
}

export default Layout