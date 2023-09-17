import React , {useState} from 'react';
import PropTypes from 'prop-types'
s



export default function TextForm(props) {
    const handleUpClick=()=>{
      //  console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
      //  console.log("Uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text, setText]= useState('Enter text here');
  return (
    <>
<div className = "container">
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
</div>
<button className="button btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="button btn-primary" onClick={handleLoClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-2">
      <h1> Your text summary</h1>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} Minutes read</p>
      <h2> Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
} 
