import LeftSection from "./LeftSection"
import RightSection from "./RightSection"



const HeroSection = () => {
  return (
    <div className="grid grid-cols-2 p-8 min-h-[80vh]">
        <LeftSection />
        <RightSection />
    </div>
  )
}

export default HeroSection