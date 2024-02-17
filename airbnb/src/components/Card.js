export default function Card(props){
    // console.log(props)
    return (
        <div className="card">
            <div className="card--item">
                <img src={`/assets/img/cards/${props.img}`} alt={props.name} className="card--item_img"/>
                <div className="card--item_content">
                    <div className="card--item_content_rating">
                        <img src="/assets/img/cards/Star 1.png" alt="Star" className="card--item_content_star"/>
                        <span>{props.rating}</span>
                        <span className="gray">({props.reviewCount})</span>
                        &middot;
                        <span className="gray">{props.location}</span>
                    </div>
                    <div className="card--item_content_title">
                        {props.title}
                    </div>
                    <div className="card--item_content_price">
                        <span>From ${props.price}</span> / person
                    </div>
                </div>
            </div>
        </div>
    )
}