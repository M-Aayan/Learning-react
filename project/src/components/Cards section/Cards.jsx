const Cards = ({id, date, organizer, title, status, price}) => {
    return (
        <div className="bg-white w-88 m-5 rounded-3xl">
            <div className="p-5 flex items-center justify-between bg-Blue-Shade text-white text-[14px] rounded-tl-3xl rounded-tr-3xl">
                <p> {id} </p>
                <p> {date} </p>
            </div>
            <div className="p-5 mt-[-12px] mb-[-12px] mr-0 ml-0 bg-white rounded-tl-2xl rounded-tr-2xl">
                <p className="text-[14px] text-Gray-Shade mb-1.5"> {organizer} </p>
                <div className="flex justify-between items-center">
                    <h2 className="text-black text-xl font-normal"> {title} </h2>
                    <button className="border-none text-Blue-Shade rounded-2xl bg-gray-200 pt-1 pb-1 pr-2.5 pl-2.5 text-[14px]"> {status} </button>
                </div>
            </div>
            <div className="mt-2.5 p-5 flex justify-between items-center">
                <h4 className="font-medium text-[20px]">${price} </h4>
                <button className="border-none pt-2 pb-2 pr-5.5 pl-5.5 rounded-3xl bg-blue-900 text-white hover:bg-blue-800 transition-colors cursor-pointer">View Details</button>
            </div>
        </div>
    )
}

export default Cards