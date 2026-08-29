const EventPanel = () => {
    return (
        <div className="py-10 px-20">
            <div className="flex justify-between items-center bg-white p-5 rounded-xl">
                <div className="flex gap-5 p-2">
                    <i class="ri-calendar-line text-4xl bg-blue-100 text-Blue-Shade p-5 rounded-full"></i>
                    <div>
                        <h3 className="font-bold text-2xl mt-1">Ready to create your next event?</h3>
                        <p className="text-[16px] text-Gray-Shade mt-2">Let's make it happen and create unforgettable experiences.</p>
                    </div>
                </div>
                <div className="">
                    <button className="bg-blue-950 p-2.5 rounded-xl text-white hover:bg-blue-900 cursor-pointer"><i class="ri-add-line mx-1"></i>Create New Event</button>
                </div>
            </div>
        </div>
    )
}

export default EventPanel