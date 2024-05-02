// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';




// let name = "harry";
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const sAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === "dark") {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      sAlert("Light mode is enabled", " success")
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      sAlert("Dark mode is enabled", " success")


    }

  }
  return (


    <>


      <Navbar title="TextUtiles" aboutText="about us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter the text to analyze" sAlert={sAlert} mode={mode} />





      </div>

    </>

  );
}

export default App;
