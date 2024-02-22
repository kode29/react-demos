import memesData from "./memesData";

export default function Meme(){
    function getMemeImage(e){
        e.preventDefault();
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        console.log(`Random Number: ${randomNumber}`)
        const url = memesArray[randomNumber].url
        // const {url} = memesArray[randomNumber]
        console.log(url)
    }
    
    return (
        <main>
            <form className="form">
                <input type="text" className="form--input" placeholder="Top text"/>
                <input type="text" className="form--input" placeholder="Bottom text"/>
                <button onClick={getMemeImage} className="form--button">Get a new meme image &#128444;</button>
            </form>
        </main>
    )
}