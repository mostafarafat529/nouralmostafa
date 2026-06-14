import { useState } from "react"
import { useNavigate } from "react-router"

const azkar = [
  { name: "سبحان الله",  limit: 33 },
  { name: "الحمد لله",   limit: 33 },
  { name: "الله أكبر",   limit: 34 },
]

const Tasbeh = () => {
  const [count, setCount]         = useState(0)
  const [current, setCurrent]     = useState(0)
  const [animate, setAnimate]     = useState(false)
  const [finished, setFinished]   = useState(false)


  const currentZikr = azkar[current]
  const progress    = (count / currentZikr.limit) * 100

  const handleTap = () => {


    if (finished) return

    // انيماشن الضغط
    setAnimate(true)
    setTimeout(() => setAnimate(false), 150)

    const newCount = count + 1

    // لو وصل للحد
    if (newCount >= currentZikr.limit) {
      if (current < azkar.length - 1) {
        // روح للذكر الجاي
        setTimeout(() => {
          setCurrent(current + 1)
          setCount(0)
        }, 300)
      } else {
        // خلص كل الأذكار
        setCount(newCount)
        setFinished(true)
      }
    } else {
      setCount(newCount)
    }
  }

  const handleReset = () => {
    setCount(0)
    setCurrent(0)
    setFinished(false)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">

      {/* اسم الذكر */}
      <h2 className="text-white text-2xl mb-2">
        {finished ? "اللهم تقبل 🤲" : currentZikr.name}
      </h2>

      {/* الهدف */}
      <p className="text-white/40 text-sm mb-6">
        الهدف: {currentZikr.limit} مرة
      </p>

      {/* شريط التقدم */}
      <div className="w-64 h-1.5 bg-white/10 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-[#c9a84c] rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* الدايرة */}
      <div
        onClick={handleTap}
        className={`
          w-48 h-48 rounded-full border-2 border-[#c9a84c]/40
          bg-[#c9a84c]/10 flex flex-col items-center justify-center
          cursor-pointer select-none mb-8
          transition-all duration-150
          ${animate ? "scale-95 bg-[#c9a84c]/20" : "scale-100"}
          ${finished ? "border-green-400/40 bg-green-400/10" : ""}
          active:scale-95
        `}
      >
        <span className={`text-5xl font-light transition-all duration-150
          ${finished ? "text-green-400" : "text-[#c9a84c]"}`}>
          {count}
        </span>
        <span className="text-white/30 text-sm mt-1">
          {finished ? "✓ اكتمل" : "اضغط للتسبيح"}
        </span>
      </div>

      {/* الأذكار progress */}
      <div className="flex gap-3 mb-8">
        {azkar.map((z, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className={`w-2 h-2 rounded-full transition-all duration-300
              ${i < current ? "bg-[#c9a84c]" :
                i === current ? "bg-[#c9a84c] scale-125" :
                "bg-white/20"}`}
            />
            <span className="text-white/30 text-xs">{z.name}</span>
          </div>
        ))}
      </div>

      {/* زرار Reset */}
      <button
        onClick={handleReset}
        className="px-6 py-2 rounded-full border border-white/10
          text-white/40 text-sm hover:border-red-400/30
          hover:text-red-400/60 transition-all duration-300"
      >
        إعادة ضبط
      </button>

    </div>
  )
}

export default Tasbeh