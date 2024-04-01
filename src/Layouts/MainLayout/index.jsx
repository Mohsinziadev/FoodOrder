import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"

const Mainlayout = () => {
  return (
    <div>
      Main Layout
     <Navbar />
     <Outlet />
    </div>
  )
}
export default Mainlayout