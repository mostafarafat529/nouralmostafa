# React + Vite

pachages : 

[1] dayjs => to know time and history
[2] react-router-dom =>routing
[3] tailwind => style 
[4]react-icons
[5]axios =>fetch api



API : aladhan.com 







✅ صفحة مواقيت الصلاة
اللي عملناه:
1️⃣ جبنا الموقع
أول ما الصفحة تفتح بنستخدم useEffect عشان ينفذ مرة واحدة بس، وجواه بنستخدم navigator.geolocation عشان يطلب إذن من المتصفح يعرف موقعك، لو وافق بيجيب خط الطول والعرض ونحطهم في state، لو رفض بنطلع error في الـ console.
2️⃣ بعتنا للـ API
بعد ما الموقع وصل، بنستخدم useEffect تاني بس المرة دي بيتنفذ لما الـ location يتغير يعني لما يجي. بنروح على موقع aladhan.com ونبعتله خط الطول والعرض مع تاريخ النهارده عشان يحسب المواقيت الصح، وبنحدد method=5 لأنها الهيئة المصرية.
3️⃣ جبنا الداتا
من الـ response بنجيب مواقيت الصلاة الستة وكمان التاريخ الهجري ونحطهم في الـ state.
4️⃣ عرضنا الداتا
بنستخدم كومبوننت PrayerCard بتستقبل اسم الصلاة والوقت وبتعرضهم في مربع، وبنكررها لكل صلاة.



تسبيح 



// عندك array
const azkar = [
  { name: "سبحان الله", limit: 33 },
  { name: "الحمد لله",  limit: 33 },
  { name: "الله أكبر",  limit: 34 },
]

// وعندك state بتحتفظ برقم العنصر الحالي
const [current, setCurrent] = useState(0)

// وبتجيب العنصر الحالي كده
const currentZikr = azkar[current]
// في البداية هيكون azkar[0] = { name: "سبحان الله", limit: 33 }


const [count, setCount]       = useState(0)
// العداد — بيبدأ من 0 وبيزيد كل ما تضغط

const [current, setCurrent]   = useState(0)
// رقم الذكر الحالي — 0 = سبحان الله / 1 = الحمد لله / 2 = الله أكبر

const [finished, setFinished] = useState(false)
// هل خلصت كل الأذكار؟ true أو false

const handleTap = () => {

  // 1️⃣ زود العداد
  const newCount = count + 1

  // 2️⃣ هل وصل للحد؟
  if (newCount >= currentZikr.limit) {

    // 3️⃣ هل في ذكر جاي؟
    if (current < azkar.length - 1) {
      // روح للذكر الجاي وصفر العداد
      setCurrent(current + 1)
      setCount(0)
    } else {
      // خلصت كل الأذكار
      setFinished(true)
      setCount(newCount)
    }

  } else {
    // 4️⃣ لو لسه ما وصلش للحد زود بس
    setCount(newCount)
  }
}

// بنحسب النسبة المئوية
const progress = (count / currentZikr.limit) * 100

// وبنحطها في الـ style
<!-- <div style={{ width: `${progress}%` }} /> -->

// هل في ذكر جاي؟
current < azkar.length - 1
// azkar.length = 3
// آخر index = 2
// يعني لو current = 0 أو 1 يبقى في جاي
// لو current = 2 يبقى خلصنا

// هل وصل للحد؟
newCount >= currentZikr.limit
// لو العداد >= الحد يبقى الذكر خلص