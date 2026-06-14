import { useNavigate } from "react-router-dom"

const QuickLinks = () => {
  const navigate = useNavigate()

  const links = [
    { name: "القرآن الكريم",  icon: "📖", path: "/quran" },
    { name: "أذكار الصباح",   icon: "🌅", path: "/azkarmorning" },
    { name: "أذكار المساء",   icon: "🌙", path: "/azkarevening" },
    { name: "السبحة",         icon: "📿", path: "/tasbeh" },
  ]

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 px-4 my-12">
      {links.map((link) => (
        <div
          key={link.name}
          onClick={() => navigate(link.path)}
          className="flex flex-col items-center justify-center py-6 rounded-2xl
            bg-[#0d1b2a] border border-[#c9a84c]/20 cursor-pointer
            hover:bg-[#c9a84c]/10 hover:border-[#c9a84c]/40 transition-all"
        >
          <span className="text-3xl mb-2">{link.icon}</span>
          <span className="text-white/70 text-sm">{link.name}</span>
        </div>
      ))}
    </div>
  )
}

export default QuickLinks