import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';



function App() {
  //by default dark mode is false
  const[mode , setMode] = useState('light'); //whetehr dark mode is enabled or not
  const[ alert, setAlert]= useState(null);
  const showAlert= (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert(" Dark Mode has been Enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light Mode has been Enabled", "success");
    }
  }
  return (
  <>
<Navbar title= "TextUtils" aboutText= "About Barun" mode={mode} toggleMode={toggleMode}/> 
<Alert alert={alert} />
<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>

</div>

  </>
  );
}

export default App;
