import { useState, useEffect } from "react"
import axios from "axios"
import PrayerCard from "./PrayerCard"
const PrayerTimes = () => {
  const [location, setLocation] = useState(null)
  const [prayer  , setprayer] = useState(null)
  const [hijri, setHijri]     = useState("")

const PrayerSkeleton = () => {
  return (
    <div className="w-full rounded-2xl p-6 bg-[#0d1b2a] border border-[#c9a84c]/20">
      <div className="h-4 w-32 mx-auto mb-4 rounded-lg bg-white/5 animate-pulse" />
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-16 rounded-xl bg-white/5 animate-pulse" />
        ))}
      </div>
    </div>
  )
}


  useEffect(() => {

    navigator.geolocation.getCurrentPosition((position) => {
      // position if success put then in state immediately
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
        // console.log("GPS ✅", position.coords.latitude, position.coords.longitude)
      },

      (error) => {
        console.log("GPS رفض ❌", error.message)
      },
      // عشان سرعه الحصول ع خط  الطول والعرض 
       {
      timeout: 5000,           
      maximumAge: 300000,    
      enableHighAccuracy: false 
    }
    )
  }, [])



  useEffect(() => {
  if (!location) return
  // لو الـ location لسه مجاش مستنى
  const today = new Date()
  const date  = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`
  // هيطلع مثلاً: 3-5-2026

  const fetchPrayers = async () => {
    const res = await axios.get(`https://api.aladhan.com/v1/timings/${date}?latitude=${location.lat}&longitude=${location.lon}&method=5`)
    const date2   = res.data.data.date.hijri
    const timings = res.data.data.timings
    setprayer({
      Fajr:    timings.Fajr,
      Sunrise: timings.Sunrise,
      Dhuhr:   timings.Dhuhr,
      Asr:     timings.Asr,
      Maghrib: timings.Maghrib,
      Isha:    timings.Isha,
    })
    setHijri(`${date2.day} ${date2.month.ar} ${date2.year} هـ`)
  }


  fetchPrayers()

}, [location])
// بيتنفذ لما الـ location يتغير يعني لما يجي




  // لو الداتا لسه مجاتش بنعرض Skeleton
  if (!prayer) return (
    <div className="flex justify-center px-4 my-6">
      <PrayerSkeleton />
    </div>
  )





  return (
  <div className="flex justify-center px-4 my-6">
    <div className="w-full max-w-screen rounded-2xl p-6 bg-[#0d1b2a]
      border border-[#c9a84c]/20 shadow-[0_0_30px_rgba(201,168,76,0.1)]">
      <p className="text-[#c9a84c] text-center text-sm mb-4">{hijri}</p>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
        <PrayerCard name="الفجر"   time={prayer.Fajr} />
        <PrayerCard name="الشروق"  time={prayer.Sunrise} />
        <PrayerCard name="الظهر"   time={prayer.Dhuhr} />
        <PrayerCard name="العصر"   time={prayer.Asr} />
        <PrayerCard name="المغرب"  time={prayer.Maghrib} />
        <PrayerCard name="العشاء"  time={prayer.Isha} />
      </div>
    </div>
  </div>
)
}

export default PrayerTimes