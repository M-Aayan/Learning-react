const LeftSection = () => {
    return (
        <div className="h-full">
            <h1 className="text-5xl font-bold pt-8">Manage Your Events</h1>
            <br />
            <h1 className="text-5xl font-bold">With <span className="text-Blue-Shade">Ease</span></h1>
            <p className="mt-8 text-[18px] font-normal text-gray-400">Create,Organize,and manage your events <br /> seamlessly all in one place.</p>
            <button className="bg-blue-950 text-white py-3.5 px-6 mt-10 rounded-xl text-[12px] font-medium hover:bg-blue-900 cursor-pointer"><i class="ri-add-line mx-1"></i>Create New Event</button>
            <button className="bg-blue-950 text-white py-3.5 px-6 ml-5 rounded-xl text-[12px] font-medium hover:bg-blue-900 cursor-pointer">Learn More</button>
        </div>
    )
}

export default LeftSection