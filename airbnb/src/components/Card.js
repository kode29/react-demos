export default function Card(props){
    // console.log(props.openSpots)
    let badgeText 
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            <div className="card--item">
                {badgeText && <div className="card--item_badge">{badgeText}</div>}
                <img src={`/assets/img/cards/${props.coverImg}`} alt={props.name} className="card--item_img"/>
                <div className="card--item_content">
                    <div className="card--item_content_rating">
                        <img src="/assets/img/cards/Star 1.png" alt="Star" className="card--item_content_star"/>
                        <span>{props.stats.rating}</span>
                        <span className="gray">({props.stats.reviewCount})</span>
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