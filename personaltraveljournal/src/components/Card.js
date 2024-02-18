export default function Card(props){
    console.log(props);
    return (

        <div className="card">
            <a href={props.articleLink} target="_blank">
                <img src={props.imageUrl} alt={props.title} className="card--img" />
            </a>
            <div className="card--info">
                <div className="card--info_header">
                    <img src="/assets/img/map_pin.png" alt="Map Pin" className="card--info_map_pin"/>
                    <span>{props.location}</span> 
                    {props.googleMapsUrl && <a href={props.googleMapsUrl} className="card--info_map_link" target="_blank">View on Google Maps</a>}
                </div>
                <div className="card--info_title">{props.title}</div>
                <div className="card--info_dates">
                    {props.startDate} {props.endDate && ` - ${props.endDate}`} 
                </div>
                <div className="card--info_description">{props.description}</div>
            </div>
        </div>
    )
}


{/* id: 1,
title: "Osaka Castle",
location: "Osaka, Japan",
googleMapsUrl: "",
startDate: "",
endDate: "",
description: "", 
imageUrl
*/}