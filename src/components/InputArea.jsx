import React from 'react';
function InputArea(props) {
    const { handleChange, meme, getMemeImage } = props;
    return (
        <div className='inputArea'>
            <div className='inputArea--inputs'>
                <input type='text'
                    name='topText'
                    onChange={handleChange}
                    value={meme.topText}
                    class='inputArea--input'
                    placeholder={meme.topText || 'Top Line'} />
                <input type='text'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                    class='inputArea--input'
                    placeholder={meme.bottomText || 'Bottom Line'} />
            </div>
            <button class='inputArea--btn' onClick={getMemeImage}>Get new meme image</button>
        </div>);
}
export default InputArea;