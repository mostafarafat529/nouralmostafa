import { useState, useEffect, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { IoArrowBack, IoPlay, IoPause } from "react-icons/io5"

const shuyukh = [
  { name: "عبد الباسط مرتل",  edition: "ar.abdulbasitmurattal" },
  { name: "عبد الباسط مجود",  edition: "ar.abdulbasitmujawwad" },
  { name: "العفاسي",           edition: "ar.alafasy" },
]

const SurahDetail = () => {
  const { id }       = useParams()
  const navigate     = useNavigate()
  const audioRef     = useRef(null)

  const [surah, setSurah]           = useState(null)
  const [isPlaying, setIsPlaying]   = useState(false)
  const [sheikh, setSheikh]         = useState(shuyukh[0])

  // جيب الآيات
  useEffect(() => {
    const fetchSurah = async () => {
      const res = await axios.get(`https://api.alquran.cloud/v1/surah/${id}`)
      setSurah(res.data.data)
    }
    fetchSurah()
  }, [id])

  // لما الشيخ يتغير وقف الصوت
  useEffect(() => {
    setIsPlaying(false)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.load()
    }
  }, [sheikh])

  // زرار play/pause
  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  if (!surah) return (
    <div className="flex flex-col gap-3 p-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-16 rounded-2xl bg-white/5 animate-pulse" />
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-[#0d1b2a] pb-24">

      {/* الهيدر */}
      <div className="sticky top-0 z-10 bg-[#0a1628] border-b border-white/10
        px-5 py-3 flex items-center justify-between">
        <button onClick={() => navigate("/quran")}
          className="text-white/60 hover:text-white transition-colors">
          <IoArrowBack className="text-xl" />
        </button>
        <h1 className="text-[#c9a84c]">{surah.name}</h1>
        <p className="text-white/30 text-xs">{surah.numberOfAyahs} آية</p>
      </div>

      {/* اختيار الشيخ */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto">
        {shuyukh.map((sh) => (
          <button key={sh.name} onClick={() => setSheikh(sh)}
            className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap border transition-all
              ${sheikh.name === sh.name
                ? "bg-[#c9a84c]/15 border-[#c9a84c]/40 text-[#c9a84c]"
                : "border-white/10 text-white/40"
              }`} >  {sh.name} </button>))}
      </div>

      {/* مشغل الصوت */}
      <div className="mx-4 mb-4 p-4 rounded-2xl border border-[#c9a84c]/20
        bg-[#c9a84c]/5 flex items-center justify-between">
        <div>
          <p className="text-white text-sm">{surah.name}</p>
          <p className="text-white/40 text-xs">{sheikh.name}</p>
        </div>
        <button
          onClick={handlePlay}
          className="w-10 h-10 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40
            flex items-center justify-center text-[#c9a84c] transition-all"
        >
          {isPlaying ? <IoPause /> : <IoPlay />}
        </button>
        <audio
          ref={audioRef}
          src={`https://cdn.islamic.network/quran/audio-surah/128/${sheikh.edition}/${id}.mp3`}
          onEnded={() => setIsPlaying(false)}
        />
      </div>

      {/* الآيات */}
      <div className="mx-4 border border-white/10 rounded-2xl p-5 bg-white/[0.03]">
        <p className="text-white text-right text-xl leading-[2.8]">
          {surah.ayahs.map((ayah) => (
            <span key={ayah.number}>
              {ayah.text}
              <span className="text-[#c9a84c] text-base mx-1">
                ﴿{ayah.numberInSurah}﴾
              </span>
            </span>
          ))}
        </p>
      </div>

    </div>
  )
}

export default SurahDetail