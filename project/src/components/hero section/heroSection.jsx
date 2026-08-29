import LeftSection from "./LeftSection"
import RightSection from "./RightSection"
import Panel from "./Panel"



const HeroSection = () => {
  return (
     <div>
      <div className="py-8 px-16 flex justify-evenly">
        <LeftSection />
        <RightSection />
      </div>
      <div className="py-8 px-16">
        <Panel />
      </div>
    </div>
  )
}

export default HeroSection