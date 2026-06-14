import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { IoSearch } from "react-icons/io5"

const Quran = () => {
  const [surahs, setSurahs]   = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch]   = useState("")
  const navigate              = useNavigate()

  useEffect(() => {
    const fetchSurahs = async () => {
      const res = await axios.get("https://api.alquran.cloud/v1/surah")
      setSurahs(res.data.data)
      setLoading(false)
    }
    fetchSurahs()
  }, [])

  // فلتر السور بالبحث
  const filtered = surahs.filter((surah) =>
    surah.name.includes(search) ||
    surah.englishName.includes(search.toLowerCase())
  )

  if (loading) return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-6">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="h-20 rounded-2xl bg-white/5 animate-pulse" />
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-[#0d1b2a] pb-24">

      {/* الهيدر */}
      <div className="sticky top-0 z-10 bg-[#0a1628] border-b border-white/10 px-5 py-3">
        <h1 className="text-[#c9a84c] text-center mb-3">القرآن الكريم</h1>

        {/* البحث */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10
          rounded-xl px-3 py-2">
          <IoSearch className="text-white/30 text-lg flex-shrink-0" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث عن سورة..."
            className="bg-transparent outline-none text-white text-sm w-full
              placeholder:text-white/30 text-right"
          />
        </div>
      </div>

      {/* السور */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4">
        {filtered.length > 0 ? filtered.map((surah) => (
          <div
            key={surah.number}
            onClick={() => navigate(`/quran/${surah.number}`)}
            className="rounded-2xl p-4 text-center border border-[#c9a84c]/20
              bg-[#0d1b2a] cursor-pointer hover:bg-[#c9a84c]/10
              hover:border-[#c9a84c]/40 transition-all"
          >
            <div className="w-7 h-7 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30
              flex items-center justify-center mx-auto mb-2">
              <span className="text-[#c9a84c] text-xs">{surah.number}</span>
            </div>
            <h2 className="text-white text-sm mb-1">{surah.name}</h2>
            <p className="text-white/30 text-xs">{surah.numberOfAyahs} آية</p>
          </div>
        )) : (
          <div className="col-span-2 md:col-span-4 text-center text-white/30 py-10">
            مفيش سورة بالاسم ده
          </div>
        )}
      </div>

    </div>
  )
}

export default Quran