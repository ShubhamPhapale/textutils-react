import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    };

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")
    };

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success")
    };

    const handleCopy = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard", "success")
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success")
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
                    Convert to uppercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
                    Convert to lowercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
                    Copy Text
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>
                    {text.split(" ").filter((element)=>{return element!==""}).length} words and {text.length} characters
                </p>
                <p>{Math.ceil(0.008 * text.split(" ").filter((element)=>{return element!==""}).length)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
}
