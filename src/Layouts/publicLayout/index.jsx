import { Outlet } from "react-router-dom"
import CategoryMenu from "../../components/CategoryMenu"

const PublicLayout = () => {
  return (
    <div>
      public route
      <CategoryMenu />
      <Outlet />
    </div>
  )
}
export default PublicLayout