import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function About(props){
// const[myStyle, setmyStyle] = useState({
//     color:'white',
//     backgroundColor: 'black'
// })
let myStyle={
  color: props.mode=== 'dark'?'white': '#042743',
  backgroundColor: props.mode=== 'dark'?'#042743': 'white',
  borderColor: props.mode=== 'dark'?'rgb(36 74 104)': '#042743',
}
return (

    <div className="Container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item"  style={{color: props.mode=== 'dark'?'white': '#042743'}}>
    <h2 className="accordion-header">
      <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyse your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show"  style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count character count
      </div>
    </div>
  </div>
  <div className="accordion-item"  style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={myStyle} aria-expanded="false" aria-controls="collapseTwo">
        Free To Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse"   data-bs-parent="#accordionExample">
      <div className="accordion-body">
        It gives instant character count or word count
      </div>
    </div>
  </div>
  <div className="accordion-item"  style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" style={myStyle} aria-controls="collapseThree">
Browser compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
        compatible with all forms of browser like firefox, chrome
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
