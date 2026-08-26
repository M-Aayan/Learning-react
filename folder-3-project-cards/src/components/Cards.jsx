

const Cards = ({id, date, organizer, title, status, price}) => {
    return (
        <div className="Card">
            <div className="card-top">
                <p> {id} </p>
                <p> {date} </p>
            </div>
            <div className="card-content">
                <p> {organizer} </p>
                <div className="title-row">
                    <h2> {title} </h2>
                    <button> {status} </button>
                </div>
            </div>
            <div className="card-bottom">
                <h4>${price} </h4>
                <button>View Details</button>
            </div>
        </div>
    )
}

export default Cards