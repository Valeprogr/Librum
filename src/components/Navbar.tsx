import DownLgNavbar from "./navbar/DownLgNavbar"
import LgNavbar from "./navbar/LgNavbar"
import MobNavbar from "./navbar/MobNavbar"

const Navbar = () => {
  return (
    <div>
     <MobNavbar />
     <LgNavbar />   
     <DownLgNavbar />
    </div>
  )
}

export default Navbar