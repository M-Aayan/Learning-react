import { useState } from "react"

const App = () => {

  const [Num, setNum] = useState(0)

  function increaseNum() {
    setNum(Num + 1)
  }

  function decreaseNum() {
    setNum(Num - 1)
  }

  function resetNum() {
    setNum(0)
  }
  return (
    <div className="bg-gray-200 w-xl m-auto p-10 mt-20 rounded-2xl">
      <div className="text-center">
        <h1 className="font-bold text-5xl pb-5">Counter App</h1>
        <h1 className="font-bold text-5xl pb-5">{Num}</h1>
        <button className="bg-green-500 text-white px-5 py-2.5 m-3 rounded-xl hover:bg-green-600 cursor-pointer" onClick={increaseNum}>Increase +</button>
        <button className="bg-blue-500 text-white px-5 py-2.5 m-3 rounded-xl hover:bg-blue-600 cursor-pointer" onClick={resetNum}>Reset</button>
        <button className="bg-red-500 text-white px-5 py-2.5 m-3 rounded-xl hover:bg-red-600 cursor-pointer" onClick={decreaseNum}>Decrease -</button>
      </div>
    </div>
  )
}

export default App