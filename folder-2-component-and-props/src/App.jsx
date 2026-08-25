import Cars from "./components/Cars"

const App = () => {
  return (
  <div className="cars">
    <Cars name='Maclaren 720s' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66w4kzQdACHtsE5ahGx3MOJsamto9-HhwQYQGfDEEBQ&s=10'/>
    <Cars name='Ferrari sf90' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn90p-kXYkOuHGRSZHBMjK34W2W6bTiZ_Q2Gy0bBZFCA&s=10'/>
    <Cars name='Koenigsegg Jesko ' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQegTHHq_SJdCpLyu_CMAJ3nUOMRzvUKXCE2LPILw6luw&s=10'/>
  </div>
  )
}

export default App