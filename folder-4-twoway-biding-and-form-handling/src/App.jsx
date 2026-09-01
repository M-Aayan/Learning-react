import React, { useState } from 'react'

const App = () => {

  const [Title, setTitle] = useState('')

  const formHandle = (e) => {
    e.preventDefault()
    console.log('Form submitted by', Title);
    setTitle('')

  }

  return (
    <div>
      <form onSubmit={(e) => {
        formHandle(e)
      }}>
        <input type="text" placeholder='Enter Your Name' value={Title} onChange={(e) => {
          setTitle(e.target.value);
        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App