import React, { useState } from 'react'



export default function Textform() {
    const [text,setText]=useState("")
    function handleUpper()
    {
        let newtext=text.toUpperCase();
        setText(newtext);
    }

    function handleClear()
    {
        setText("");
    }

    function handleLower()
    {
        let newtext=text.toLowerCase();
        setText(newtext);
    }

    function handleOnChange(e)
    {
        setText(e.target.value)
    }
  return (
    <>
    <div className="container my-3">
        <h2>Enter Text Here:</h2>
        <textarea className="form-control"  id="floatingTextarea" rows="8"  value={text} onChange={handleOnChange}></textarea>
        <button type="button" className="btn btn-primary my-3" onClick={handleLower}>Convert to lowercase</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleUpper}>Convert to uppercase</button>
        <button type="button" className="btn btn-primary" onClick={handleClear}>clear text</button>

    </div>
    <div className='container'>
        <h4> Your Text Summary</h4>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h4>Preview:</h4>
        <p>{text}</p>
    </div>

    </>
  )
}
