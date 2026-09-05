import React from 'react'

const Section = () => {
  return (
    <div>
      {/* right side jo ka forms handling ka lia h  */}
      <div className='mt-4  sm:m-6 md:m-8 lg:m-10 w-full sm:w-1/2 md:w-3/5 xl:w-1/2'>
        <form className='flex flex-col gap-5 p-4'>
          <h1 className='text-3xl font-medium p-3'>Add Notes</h1>
          <input type="text" placeholder='Enter Notes Title...' className='p-4 outline-2 rounded outline-purple-400 font-normal text-xl' />
          <textarea placeholder='Write your notes here...' className='bg-purple-100 outline-none p-5 rounded h-96' ></textarea>
          <button className='bg-purple-400 py-2 rounded text-white active:scale-95 hover:bg-purple-500 cursor-pointer transition-colors'><i className="ri-add-large-line mr-3 text-xl text-center"></i>New Notes</button>
        </form>
      </div>
    </div>
  )
}

export default Section