import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
function Mainlayout() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <div className='flex max-w-[1440px] gap-14 px-0 lg:px-10'>
            <div className='hidden mr-2 lg:block'>
                <Sidebar/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Mainlayout
