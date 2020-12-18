import React from 'react'
import Videos from './videos'
import Navbar from './navbar'
import SideBar from './sidebar'

const Layout = () => {
    return(
        <>
        <Navbar />
        <div className='d-flex'>
        <SideBar />
        <Videos />
        </div>
        </>
    )
}

export default Layout