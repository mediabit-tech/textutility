import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1a253a';
      showAlert("Dark mode has been enabled.", "success");
      // document.title = 'TextUtility - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success");
      // document.title = 'TextUtility - Light Mode';
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtility" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about" key="about">
           <About mode={mode}/>
          </Route>
          <Route exact path="/" key="textform">
            <Textform showAlert={showAlert} heading="TextUtility - word counter, character counter, remove extra spaces:" mode={mode} />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
