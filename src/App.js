import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteState from "./context/NoteState";
import Alert from './Components/Alert';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Addnote from './Components/Addnote';
import { useState } from 'react';
import Notes from './Components/Notes';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  return (
    <>
    <NoteState>

      <BrowserRouter basename="/NoteExpress">
        <Navbar />
        <Alert alert={alert}/>

        <div className="">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Addnote" element={<Addnote />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Notes" element={<Notes />} />
          <Route exact path="/Signup" element={<Signup showAlert={showAlert}  />} />
          <Route exact path="/Login" element={<Login showAlert={showAlert} />} />

        </Routes>
        </div>

      </BrowserRouter>

      </NoteState>
    </>
  );
}

export default App;