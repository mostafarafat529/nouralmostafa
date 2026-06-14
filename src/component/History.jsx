import React, { useEffect, useState } from 'react'
import { IoShareSocial } from "react-icons/io5"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const History = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const hours   = String(time.getHours()).padStart(2, "0")
  const minutes = String(time.getMinutes()).padStart(2, "0")
  const seconds = String(time.getSeconds()).padStart(2, "0")

  const days = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
  const currentDay = days[time.getDay()]

  const date  = String(time.getDate()).padStart(2, "0")
  const month = String(time.getMonth() + 1).padStart(2, "0")
  const year  = time.getFullYear()

  const hijri = new Intl.DateTimeFormat("ar-EG-u-ca-islamic-umalqura", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(time)

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    toast.success("تم نسخ الرابط ✅")
  }

  return (
    <div className="flex justify-center px-4 my-10">
      <div className="w-full max-w-md rounded-2xl p-6 text-center bg-[#0d1b2a]
        border border-[#c9a84c]/20 shadow-[0_0_30px_rgba(201,168,76,0.1)]">

        <p className="text-white/40 text-md mb-2">
          {currentDay}، {date}/{month}/{year}
        </p>

        <h1 className="text-white text-5xl font-light tracking-tight mb-2">
          {hours} : {minutes} : {seconds}
        </h1>

        <p className="text-[#c9a84c] text-sm mt-1">
          {hijri}
        </p>

        <IoShareSocial
          className='cursor-pointer text-lg mt-3 text-white/40 hover:text-[#c9a84c] transition-colors'
          onClick={handleShare}
        />

      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        theme="dark"
        rtl={true}
      />
    </div>
  )
}

export default History