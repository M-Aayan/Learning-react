import LeftSection from "./LeftSection"
import Panel from "./Panel"
import RightSection from "./RightSection"



const HeroSection = () => {
  return (
     <div>
      <div className="py-10 px-18 h-[90vh] grid grid-cols-2">
        <LeftSection />
        <RightSection />
      </div>
      <div className="py-8 px-18 h-8">
        <Panel />
      </div>
    </div>
  )
}

export default HeroSection