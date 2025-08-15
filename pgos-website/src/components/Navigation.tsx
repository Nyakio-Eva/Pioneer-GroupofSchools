import React from "react"
import { Link} from "react-router-dom";



const NavBar: React.FC =() =>{
    return(
        <nav className="bg-[#083056] w-full h-20 p-2">
            <Link to={'/'}>
              <img
              src="/pgoslogo2.webp"
              alt="pioneer group of schools logo"
              className="max-w-[800px] h-full object-cover "
            />
            </Link>
            
        </nav>
    )
}
export default NavBar;