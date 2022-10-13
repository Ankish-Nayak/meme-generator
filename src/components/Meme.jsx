import React from "react";
import InputArea from "./InputArea";
import OutputArea from "./OutputArea";
function Meme() {
    let memesData = [];
    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes));
    }, [memesData]);

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        url: ''
    });
    const [allMemes, setAllMemes] = React.useState(memesData);





    function getMemeImage() {
        let randomIdx = Math.floor(Math.random() * (allMemes.length));
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                url: allMemes[randomIdx].url
            };
        });
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            };
        });
    }

    return (
        <>
            <InputArea
                handleChange={handleChange}
                meme={meme}
                getMemeImage={getMemeImage}
            />
            <OutputArea meme={meme} />
        </>
    );
}
export default Meme;