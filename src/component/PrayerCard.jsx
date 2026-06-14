import React from 'react'

const PrayerCard = ({name , time}) => {
  return (
 <div className="flex items-center justify-between px-4 py-3 
      rounded-xl bg-white/5 border border-white/10 mb-3">
      <span className="text-white">{name}</span>
      <span className="text-[#c9a84c]">{time}</span>
    </div>
  )
}

export default PrayerCard