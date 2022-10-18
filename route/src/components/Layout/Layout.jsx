import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import './Layout.css'

const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <div className='main-content'>
        <div className='nav-bar'>
          <NavBar />
        </div>
        <div className='outlet'>
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Layout
