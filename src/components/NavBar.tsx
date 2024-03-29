import { useEffect, useState } from "react"
import NavItem from "./ui/NavItem"
import DropdownMenu from "./ui/DropdownMenu"
import { useAuth } from "@/contexts/AuthContext"
import LogoutButton from "./LogoutButton"


export default function NavBar() {

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { isAuth } = useAuth()

  const closeDropdown = () => {
    setDropdownOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      closeDropdown()
    }

    if (dropdownOpen) {
      window.addEventListener("scroll", handleScroll)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [dropdownOpen])

  return (
    <nav className="relative flex justify-between p-4 dark:text-white">

      <svg className="w-10 h-10 fill-current animate-scaleIn" viewBox="0 0 61.63 61.63">
        <path d="M54.435,0.211c-1.253,0-2.268,1.015-2.268,2.266v2.93h-1.432v-2.93c0-1.251-1.015-2.266-2.268-2.266 c-1.251,0-2.266,1.015-2.266,2.266v2.93h-24.95c-0.552-0.152-1.15-0.152-1.712,0h-4.114v-3.14C15.425,1.016,14.409,0,13.157,0 S10.89,1.015,10.89,2.267v3.14H9.459v-3.14C9.459,1.016,8.445,0,7.192,0C5.941,0,4.925,1.015,4.925,2.267v7.687 c0,1.252,1.015,2.267,2.267,2.267c1.253,0,2.267-1.015,2.267-2.267V6.617h1.432v3.337c0,1.252,1.015,2.267,2.267,2.267 c1.251,0,2.268-1.015,2.268-2.267V6.617h2.443c-0.244,0.394-0.407,0.864-0.425,1.433c-0.192,5.9,1.786,17.635,9.074,18.286 c0,2.898,0,5.796,0,8.693c0,0.111,0.009,0.217,0.016,0.323c-0.082,0.193-0.147,0.408-0.19,0.646 c-1.006,5.516-2.015,11.029-3.022,16.543c-0.659,3.61,4.859,5.151,5.523,1.523c0.531-2.911,1.063-5.822,1.596-8.733 c0.649,4.741,1.298,9.48,1.948,14.22c0.501,3.646,6.018,2.087,5.521-1.522c-0.98-7.158-1.963-14.315-2.941-21.473 c-0.01-0.066-0.023-0.127-0.035-0.189c0.111-0.387,0.176-0.81,0.176-1.275c0-2.843,0-5.686,0-8.529 c7.185-0.775,9.138-12.407,8.949-18.273c-0.022-0.684-0.239-1.241-0.574-1.671h2.72v3.549c0,1.251,1.015,2.265,2.266,2.265 c1.253,0,2.268-1.014,2.268-2.265V6.617h1.432v3.549c0,1.251,1.015,2.265,2.268,2.265c1.25,0,2.266-1.014,2.266-2.265V2.478 C56.7,1.226,55.685,0.211,54.435,0.211z M38.33,8.287c0.096,2.967-0.337,5.787-1.152,8.637c-0.405,1.415-1.6,4.298-3.443,3.881 c-1.476-1.254-3.826-1.365-5.441-0.331c-0.155,0.017-0.313,0.042-0.478,0.083c-1.75,0.453-2.833-2.05-3.326-3.364 c-1.085-2.877-1.421-6.095-1.32-9.144c0.018-0.569-0.114-1.039-0.331-1.433h15.955C38.488,7.046,38.309,7.602,38.33,8.287z M25.723,14.307c0-2.811,2.279-5.09,5.09-5.09s5.09,2.279,5.09,5.09s-2.279,5.09-5.09,5.09S25.723,17.118,25.723,14.307z"/>
      </svg>

      <div className="hidden gap-2 md:flex">

        {isAuth ? (
          <>
            <NavItem to="dashboard/progress" className="px-2">
              Dashboard
            </NavItem>

            <LogoutButton />
          </>
        ) : (
          <>
            <NavItem
              to={"/"} 
              className="px-2"
            >
              Home
            </NavItem>

            <NavItem 
              to={"login"} 
              className="px-2"
            >
              Login
            </NavItem>

            <NavItem 
              to={"register"} 
              className="px-2"
            >
              Register
            </NavItem>
          </>
        )}
      
      </div>

      <button
        className="flex justify-center w-12 px-2 py-2 transition-all border border-gray-200 rounded-lg dark:border-gray-700 hover:border-black hover:dark:border-gray-600 md:hidden"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {dropdownOpen ? "x" : "menu"}
      </button>

      {dropdownOpen && (
        <DropdownMenu 
          isOpen={dropdownOpen} 
          className="absolute left-0 right-0 gap-2 px-2 top-16 md:hidden sm:px-4"  
        >
          {isAuth ? (
            <>
              <NavItem 
                to={"dashboard/progress"} 

                className="px-2"
                onClick={() => setDropdownOpen(false)}
              >
                Dashboard
              </NavItem>

              <button
                className="flex justify-center flex-1 w-full px-2 py-2 border"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavItem 
                to={"/"} 

                className="px-2"
                onClick={() => setDropdownOpen(false)}
              >
                Home
              </NavItem>

              <NavItem 
                to={"login"} 

                className="px-2"
                onClick={() => setDropdownOpen(false)}
              >
                Login
              </NavItem>

              <NavItem 
                to={"register"} 

                className="px-2"
                onClick={() => setDropdownOpen(false)}
              >
                Register
              </NavItem>
            </>
          )}
        </DropdownMenu>
      )}
    </nav>
  )
}