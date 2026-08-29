const Panel = () => {
  return (
    <div className="p-4 ">
      <div className="flex items-center justify-evenly bg-white p-5 rounded-xl">
        {/* total event */}
        <div className="flex gap-5 p-2">
          <i class="ri-calendar-line text-3xl bg-blue-100 text-Blue-Shade p-3 rounded-full"></i>
          <div className="border-r-1 pr-10 border-gray-300">
            <h3 className="font-bold text-2xl">12</h3>
            <p className="text-[16px] text-Gray-Shade">Total Events</p>
          </div>
        </div>
        {/* upcoming event  */}
                <div className="flex gap-5 p-2">
          <i class="ri-calendar-check-line text-3xl bg-green-100 text-green-400 p-3 rounded-full"></i>
          <div className="border-r-1 pr-10 border-gray-200">
            <h3 className="font-bold text-2xl">7</h3>
            <p className="text-[16px] text-Gray-Shade">Upcoming Events</p>
          </div>
        </div>
        {/* pending event  */}
                <div className="flex gap-5 p-2">
          <i class="ri-time-line text-3xl bg-yellow-100 text-yellow-400 p-3 rounded-full"></i>
          <div className="border-r-1 pr-10 border-gray-200">
            <h3 className="font-bold text-2xl">3</h3>
            <p className="text-[16px] text-Gray-Shade">Pending Events</p>
          </div>
        </div>
        {/* completed event  */}
                <div className="flex gap-5 p-2">
          <i class="ri-check-line text-3xl bg-blue-100 text-blue-400 p-3 rounded-full"></i>
          <div className="border-r-1 pr-10 border-gray-200">
            <h3 className="font-bold text-2xl">2</h3>
            <p className="text-[16px] text-Gray-Shade">Completed Events</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Panel