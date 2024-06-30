import React from 'react'
import Notes from "./Notes";
import Addnote from './Addnote';

const Home = (props) => {

  const mystyle = {
       backgroundColor: "rgb(50 58 66)",
    borderRadius: "23px",
    color: "white",
    width: "45%"
  }
  const mystyle2 = {
       backgroundColor: "rgb(50 58 66)",
    borderRadius: "23px",
    color: "white",
    width: "85%",
    display:"none"
  }

  return (
    <div >

      <div className='container p-3 my-4 container-u' style={mystyle}>
        <Addnote showAlert={props.showAlert} />
      </div>

      <div className='container p-3 my-4 container-u' style={mystyle2}>
        <Notes showAlert={props.showAlert} />
      </div>

    </div>
  )
}

export default Home
