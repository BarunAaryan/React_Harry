import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
// import About from './components/About';



function App() {
  //by default dark mode is false
  const[mode , setMode] = useState('light'); //whetehr dark mode is enabled or not
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
  <>
<Navbar title= "TextUtils" aboutText= "About Barun" mode={mode} toggleMode={toggleMode}/> 

<div className="container my-3">
<TextForm heading="Enter the text to analyze" mode={mode}/>

</div>

  </>
  );
}

export default App;
