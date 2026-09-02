const LeftSec = () => {
  return (
    <div>
        <div className="py-5 px-4">
            <form className="flex flex-col w-2xl p-10 m-10">
                <input type="text" placeholder="Enter Note Title..." className="py-5 px-4 mb-5 outline-purple-500 outline-2 rounded"/>
                <textarea placeholder="Write your note here..." className="py-6 px-4 mb-5 outline-none rounded-xl bg-purple-100 h-[300px]" ></textarea>
                <button className="bg-purple-500 text-white font-normal rounded p-3 text-xl active:scale-95 hover:bg-purple-600 transition-colors cursor-pointer"><i className="ri-add-large-line mr-3 font-Normal"></i>New Notes</button>
            </form>
        </div>
    </div>
  )
}

export default LeftSec