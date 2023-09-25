import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


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
    }, 1700);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert(" Dark Mode has been Enabled", "success");
      document.title= "TextUtils- Dark Mode";
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light Mode has been Enabled", "success");
      document.title= "TextUtils- Light Mode";
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About Barun" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
        <Route exact path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
    </Routes> */}
<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      </div>
    {/* </Router> */}
  </>
  );
}

export default App;
