import React , {useState} from 'react';
import PropTypes from 'prop-types'




export default function TextForm(props) {
    const handleUpClick=()=>{
      //  console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Uppercase!", "success");
    }
    const handleLoClick=()=>{
      //  console.log("Uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to Lowercase!", "success");
    }
    const handleClearClick=()=>{
      //  console.log("Uppercase was clicked" + text);
        let newText='';
        setText(newText);
        props.showAlert(" Cleared the text", "success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleCopy=()=>{
      var text = document.getElementById('MyBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert(" Copied text to clipboard", "success");
    }
    //handle extra spacees
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      //use of regex
      setText(newText.join(" "));
      props.showAlert(" Extra spaces removed!", "success");
    }
    const [text, setText]= useState('Enter text here');
  return (
    <>
<div className = "container" style={{color: props.mode==='dark' ? 'white': '#042743'}}>
    <h1 className= 'mb-2'>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? '#13466e': 'white', color: props.mode==='dark' ? 'white': '#042743'}} id="MyBox" rows="8"></textarea>
</div>
<button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
<button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
<button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
<button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
{/* <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={UpperLetter}>Remove Extra Spaces</button> */}
    </div>
    <div className="container my-2" style={{color: props.mode==='dark' ? 'white': '#042743'}}>
      <h1> Your text summary</h1>
      <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2> Preview</h2>
      <p>{text.length>0?text: "Nothing to preview."}</p>
    </div>
    </>
  )
} 
