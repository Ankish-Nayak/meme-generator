import React from "react";

function OutputArea(props) {
    const { meme } = props;
    return <div className='output'>
        <div className='output--text1'>{meme.topText}</div>
        <img src={meme.url} className='output--img' />
        <div className='output--text2'>{meme.bottomText}</div>
    </div>
}
export default OutputArea;