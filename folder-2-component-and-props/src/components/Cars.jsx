const Cars = ({ name, image }) => {
  return (
    <>
      <div className="car">
        <img src={image} alt="Picture" />
        <h1>{name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, odit!</p>
        <button>View Car</button>
      </div>
    </>
  )
}


export default Cars
