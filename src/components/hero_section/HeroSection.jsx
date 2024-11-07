import Header from "../header_section/Header.jsx"
import MainSection from "./MainSection.jsx"
import { small_desktop_screen, big_desktop_screen } from "../../assets/"

function HeroSection() {
  return (
    <div className="min-h-[100vh] w-[100vw] bg-slate-50 bg-mobile-bg sm:bg-desktop-bg bg-cover bg-center md:px-[60px] lg:px-[112px] ">
      <Header/>
      <MainSection />
      {/* hero image mobile */}
      <div className="flex items-center justify-center  sm:hidden mt-[64px]">
        <img className=" h-[230px]" src={small_desktop_screen} alt="desktop screen" />
      </div>
      <div className="hidden sm:flex items-center justify-center  w-full   ">
        <img className="w-full " src={big_desktop_screen} alt="desktop screen" />
      </div>
      
    </div>
  )
}

export default HeroSection
