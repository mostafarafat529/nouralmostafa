import React, { useState } from 'react'
import { azkarSabah } from "../data/azkar"
import { NavLink } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5"

// كومبوننت كل ذكر لوحده
const ZikrCard = ({ item }) => {
  const [count, setCount] = useState(item.count)
  const isFinished = count === 0
  const progress = (count / item.count) * 100

  const handleCount = () => {
    if (count > 0) setCount(count - 1)
  }

  const handleReset = () => {
    setCount(item.count)
  }

  return (
    <div className={`relative border rounded-3xl p-5 transition-all duration-500
      ${isFinished
        ? "border-white/10 bg-white/5 opacity-50"
        : "border-[#c9a84c]/30 bg-[#0d1b2a] shadow-[0_0_20px_rgba(201,168,76,0.07)]"
      }`}>

      {/* الهيدر — الاسم والعداد */}
      <div className="flex items-center justify-between mb-3">
        <h1 className={`text-sm font-medium ${isFinished ? "text-white/30" : "text-[#c9a84c]"}`}>
          {item.name}
        </h1>
        {/* العداد */}
        <span className={`text-sm px-3 py-1 rounded-full border
          ${isFinished
            ? "text-white/20 border-white/10"
            : "text-[#c9a84c] border-[#c9a84c]/30 bg-[#c9a84c]/10"
          }`}>
          {count}
        </span>
      </div>

      {/* نص الذكر */}
      <p className={`text-right leading-loose mb-3 text-lg
        ${isFinished ? "text-white/20" : "text-white"}`}>
        {item.text}
      </p>

      {/* المصدر */}
      <p className={`text-xs text-right mb-4
        ${isFinished ? "text-white/20" : "text-white/40"}`}>
        {item.source}
      </p>

      {/* شريط التقدم */}
      <div className="w-full h-1 bg-white/10 rounded-full mb-4 overflow-hidden">
        <div
          className="h-full bg-[#c9a84c] rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}/>
      </div>

      {/* الأزرار */}
      <div className="flex items-center justify-between gap-3">
        {/* زرار التكرار */}
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-4 py-2 rounded-full border
             border-white/10 text-white/40 text-sm
            hover:border-[#c9a84c]/30 hover:text-[#c9a84c] transition-all">
          تكرار
          <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">
            {count}
          </span>
        </button>

        {/* زرار العد */}
        <button
          onClick={handleCount}
          disabled={isFinished}
          className={`flex-1 py-2 rounded-full text-sm font-medium transition-all
            ${isFinished
              ? "bg-white/5 text-white/20 cursor-not-allowed"
              : "bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30 hover:bg-[#c9a84c]/30 active:scale-95"
            }`}
        >
          {isFinished ? "✓ تم" : "تسجيل"}
        </button>

      </div>
    </div>
  )
}


const AzkarMorning = () => {
  return (
    <div className="min-h-screen bg-[#0d1b2a]">

      {/* الهيدر */}
      <div className="sticky top-0 z-10 bg-[#0a1628] border-b border-white/10
        px-5 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-white/60 hover:text-white transition-colors">
          <IoArrowBack className="text-xl" />
        </NavLink>
        <h1 className="text-[#c9a84c] text-base">أذكار الصباح</h1>
        <div className="w-6" />
      </div>

      {/* الأذكار */}
      <div className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-4">
        {azkarSabah.map((item) => (
          <ZikrCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default AzkarMorning