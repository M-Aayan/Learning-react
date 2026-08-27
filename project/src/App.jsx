import Navbar from "./components/navbar/navbar"
import Cards from "./components/Cards section/Cards"


const App = () => {

  const Events = [
    {
      id: "GBD99763JS",
      date: "24/09/2026",
      organizer: "Infinity Event Organizer",
      title: "Summer Music Festival",
      status: "Upcoming",
      price: 65
    },
    {
      id: "EVT48291KM",
      date: "05/10/2026",
      organizer: "Global Event Co.",
      title: "Tech Innovation Summit",
      status: "Upcoming",
      price: 120
    },
    {
      id: "EVT73156RP",
      date: "12/10/2026",
      organizer: "Creative Minds",
      title: "Design & Art Expo",
      status: "Pending",
      price: 45
    },
    {
      id: "EVT29584LX",
      date: "20/10/2026",
      organizer: "Urban Events",
      title: "City Food Carnival",
      status: "Upcoming",
      price: 35
    },
    {
      id: "EVT61843QN",
      date: "02/11/2026",
      organizer: "Future Tech Events",
      title: "AI & Robotics Conference",
      status: "Pending",
      price: 150
    },
    {
      id: "EVT90427BZ",
      date: "15/11/2026",
      organizer: "Elite Sports Group",
      title: "International Sports Gala",
      status: "Upcoming",
      price: 85
    },
    {
      id: "EVT35619HT",
      date: "28/11/2026",
      organizer: "SoundWave Productions",
      title: "Live Rock Concert",
      status: "Upcoming",
      price: 95
    },
    {
      id: "EVT82746CW",
      date: "10/12/2026",
      organizer: "Business Network",
      title: "Startup Networking Event",
      status: "Pending",
      price: 55
    },
    {
      id: "EVT54382VD",
      date: "18/12/2026",
      organizer: "Winter Events Ltd.",
      title: "Winter Wonderland",
      status: "Upcoming",
      price: 40
    },
    {
      id: "EVT16935FS",
      date: "31/12/2026",
      organizer: "Infinity Event Organizer",
      title: "New Year Celebration",
      status: "Pending",
      price: 110
    }
  ]


  return (
    <>
    <Navbar />
    {/* <div className='p-2.5 flex flex-wrap bg-gray-200 sm:flex-nowrap items-center p-3'>
      <h1 className="p-2 text-2xl font-medium">Your Events</h1>
      {Events.map((event)=>{
        return <Cards id={event.id} date={event.date} organizer={event.organizer} title={event.title} status={event.status} price={event.price} />
      })}
    </div> */}
    </>
  )
}

export default App