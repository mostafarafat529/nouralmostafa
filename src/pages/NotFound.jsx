import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0d1b2a]">
      <p className="text-[#c9a84c] text-6xl mb-4">404</p>
      <p className="text-white text-lg mb-8">الصفحة دي مش موجودة</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 rounded-full border border-[#c9a84c]/30
          text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all"
      >
        ارجع للرئيسية
      </button>
    </div>
  )
}

export default NotFound