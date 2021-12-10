import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase!', 'success');
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase!', 'success');
    }

    const handleClearClick = ()=> {
        let newText = '';
        setText(newText);
        props.showAlert('Textbox is cleared!', 'success');
    }

    const handleCopyClick = (event)=> {
        let text = document.getElementById('myBox');
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copy to clipboard!', 'success');
    }

    const handleExtraSpaceClick = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('All extra spaces are removed!', 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#1a253a', color: props.mode === 'light' ? 'black' : 'white'}} value={text} id="myBox" rows="6"></textarea>
            </div>
            <div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaceClick}>Remove Extra Space</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h3>Your text summery:</h3>
            <p><b>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length}</b> words and <b>{text.length}</b> charactors, <b>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length}</b> minuets take to read below paragraph.</p>
            <h3>Preview:</h3>
            <p>{text.length>0 ? text: "Nothing to preview."}</p>
        </div>
        </>
    )
}
