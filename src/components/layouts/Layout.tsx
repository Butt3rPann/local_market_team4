import Footer from './Footer';
import NavBar from './NavBar'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <div>
        <NavBar/>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
