export default function Card(props){
    return (
        <div className="card">
            <div className="card--item">
                <img src="/assets/img/cards/katie-zaferes.png" alt="Card 1" className="card--item_img"/>
                <div className="card--item_content">
                    <div className="card--item_content_rating">
                        <img src="/assets/img/cards/Star 1.png" alt="Star" className="card--item_content_star"/>
                        <span className="gray">5.0</span>
                        <span className="gray">(6)</span>
                        &middot;
                        USA
                    </div>
                    <div className="card--item_content_title">
                        Life lessons with Katie Zaferes
                    </div>
                    <div className="card--item_content_price">
                        <span>From $136</span> / person
                    </div>
                </div>
            </div>
        </div>
    )
}