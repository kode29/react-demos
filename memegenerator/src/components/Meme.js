import React from "react"

// import memesData from "./memesData";

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "top text",
        bottomText: "bottom text",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])
    // React.useEffect( () => {
    //     console.log("Effect Ran");
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(apiData => setAllMemes(apiData.data.memes))
    // }, [])
    // dependency is [] as it only needs to run on load and not again

    // ASYNC version
    React.useEffect( () => {
        async function getMemes(){
            console.log("Effect Ran");
            const res = await fetch("https://api.imgflip.com/get_memes")
            const apiData = await res.json()
            setAllMemes(apiData.data.memes)
        }
        getMemes();
    }, [])

    function getMemeImage(e){
        e.preventDefault();

        // const memesArray = allMemes;
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage: url
        }))
    }

    function handleChange(e){
        const {name, value} = e.target
        setMeme(prevData => ({    
            ...prevData,
            [name]: value
            })
        );
    }
    
    return (
        <main>
            <form className="form">
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Top text"
                    onChange={handleChange} 
                    name="topText"
                />
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Bottom text"
                    onChange={handleChange} 
                    name="bottomText"
                />
                <button onClick={getMemeImage} className="form--button">Get a new meme image &#128444;</button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} alt="" className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}