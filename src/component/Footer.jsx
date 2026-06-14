import { NavLink } from "react-router-dom"
import { IoHome, IoBook, IoSunny, IoMoon, IoEllipse } from "react-icons/io5"

const Footer = () => {

  const links = [
    { name: "الرئيسية",     icon: <IoHome />,  path: "/" },
    { name: "القرآن",       icon: <IoBook />,  path: "/quran" },
    { name: "أذكار الصباح", icon: <IoSunny />, path: "/azkarmorning" },
    { name: "أذكار المساء", icon: <IoMoon />,  path: "/azkarevening" },
    { name: "السبحة",       icon: <IoEllipse />, path: "/tasbeh" },
  ]

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50
      bg-[#0a1628] border-t border-white/10">

      <div className="flex items-center justify-around px-2 py-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all
              ${isActive
                ? "text-[#c9a84c]"
                : "text-white/30 hover:text-white/60"
              }`
            }
          >
            <span className="text-xl">{link.icon}</span>
            <span className="text-[10px]">{link.name}</span>
          </NavLink>
        ))}
      </div>

    </footer>
  )
}

export default Footer