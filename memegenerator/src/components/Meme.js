import memesData from "./memesData";

export default function Meme(){
    function handleOnClick(e){
        e.preventDefault();
        console.log("I was clicked");
    }    
    
    return (
        <main>
            <form className="form">
                <input type="text" className="form--input" placeholder="Top text"/>
                <input type="text" className="form--input" placeholder="Bottom text"/>
                <button onClick={handleOnClick} className="form--button">Get a new meme image &#128444;</button>
            </form>
        </main>
    )
}