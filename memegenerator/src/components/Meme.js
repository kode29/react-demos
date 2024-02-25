import React from "react"

import memesData from "./memesData";

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(e){
        e.preventDefault();

        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage: url
        }))
    }
    
    return (
        <main>
            <form className="form">
                <input type="text" className="form--input" placeholder="Top text"/>
                <input type="text" className="form--input" placeholder="Bottom text"/>
                <button onClick={getMemeImage} className="form--button">Get a new meme image &#128444;</button>
            </form>
            <div className="meme--image">
                <img src={meme.randomImage} alt=""/>
            </div>
        </main>
    )
}