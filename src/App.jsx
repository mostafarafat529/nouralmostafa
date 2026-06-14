import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Quran from "./pages/Quran"
import SurahDetail from "./pages/SurahDetail"
import Tasbeh from "./pages/Tasbeh"
import AzkarMorning from "./pages/AzkarMorning"
import AzkarEvening from "./pages/AzkarEvening"
import Navbar from "./component/Navbar"
import NotFound from "./pages/NotFound"
import Footer from "./component/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/quran/:id" element={<SurahDetail />} />
        <Route path="/azkarmorning" element={<AzkarMorning />} />
        <Route path="/azkarevening" element={<AzkarEvening />} />
        <Route path="/tasbeh" element={<Tasbeh />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App