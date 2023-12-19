import { Outlet } from "react-router-dom"
import Navbar from "../navigation/Navbar"
import Footer from "../navigation/Footer"

 function Layout () {
    return(
      <div>
        <Navbar />
        <Outlet />
        <Footer/>
      </div>
    )
  }
  
  export default Layout 