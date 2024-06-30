import React, { useContext } from 'react'
import { useNavigate, } from 'react-router-dom';
import noteContext from "../context/noteContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Noteitems = (props) => {

    const context = useContext(noteContext)
    const { deleteNote } = context;
    const { note, updateNote,query  } = props;
    const navigate = useNavigate()
   

    const notify = () => toast.success(' successfully Deleted!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const handleAddClick = () => {
        navigate("../");
    }

 
     // Check if the note and its properties are defined
     if (!note || !note.title || !note.description || !note.tag) {
         return null; // Exit early if any property is undefined
     }
 
  



        return  (
        <div className='p-3' style={{ width: "33%" }}>
            <div className="card" style={{ height: "15rem" }}>
                <div className="card-body">

                    <div className="d-flex flex-row-reverse">

                        <span className="badge text-bg-dark overflow-hidden mb-3" style={{ "fontSize": "15px", "textTransform": "capitalize", width: "11rem" }}> {new Date(note.updatedAt).toLocaleString()}</span>

                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title overflow-hidden" style={{ "textTransform": "capitalize" }}>{note.title}</h5>

                        <div className="d-flex">
                            <i className="fa-regular fa-trash-can mx-2" onClick={
                                () => {
                                    deleteNote(note._id);
                                    notify();
                                }
                            }></i>
                            <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}></i>

                            <i className="fa-solid fa-plus" onClick={handleAddClick} ></i>
                        </div>
                    </div>

                    <p className="card-text overflow-hidden" style={{ "textTransform": "capitalize" }}>{note.description}</p>
                    <span className="badge text-bg-dark overflow-auto my-2" style={{ "fontSize": "15px", "textTransform": "capitalize", whiteSpace: "pre-wrap",width:"10rem" }}> {note.tag}</span>
                </div>
            </div>

            <div>
                <button style={{ "display": "none" }} onClick={notify}>Notify!</button>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>

        </div>
         ) 
}

export default Noteitems