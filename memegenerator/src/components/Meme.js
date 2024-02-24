import { useState } from "react"
import memesData from "./memesData";

export default function Meme(){

    const [memeImage, setMemeImage] = useState("")

    function getMemeImage(e){
        e.preventDefault();
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    
    return (
        <main>
            <form className="form">
                <input type="text" className="form--input" placeholder="Top text"/>
                <input type="text" className="form--input" placeholder="Bottom text"/>
                <button onClick={getMemeImage} className="form--button">Get a new meme image &#128444;</button>
            </form>
            <div className="meme--image">
                <img src={memeImage} alt=""/>
            </div>
        </main>
    )
}