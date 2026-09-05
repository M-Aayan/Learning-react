import React from 'react'

const Section = () => {
  return (
    <div>
      <div className=''>
        <form className='flex-col'>
          <input type="text" placeholder='Enter Note Title..'/>
          <textarea placeholder='Write your note here...'></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Section