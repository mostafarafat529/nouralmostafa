import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-3 bg-[#0a1628] border-b border-white/10">
      
      <div className="text-[#c9a84c] text-lg font-medium">
        ☪   نور المصطفى
      </div>

      <div className="flex items-center gap-5">
        <NavLink   to="/"  className= "text-[#c9a84c] bg-[#c9a84c]/10 text-sm px-3 py-1 rounded-full">
          الرئيسية
        </NavLink>
            </div>
    </nav>
  )
}

export default Navbar