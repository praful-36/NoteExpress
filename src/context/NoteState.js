import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

  const host = "http://localhost:5000"
  const noteInitial = []
  const [notes, setnotes] = useState(noteInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "authtoken": localStorage.getItem('Auth_Token')
      }
    });
    const json = await response.json()
    setnotes(json)
  }

  //add a note
  const addNote = async (title, description, tag) => {

    // api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authtoken": localStorage.getItem('Auth_Token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const note = await response.json();
    setnotes(notes.concat(note))
  }


  //delete a note
  const deleteNote = async (id) => {

    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "authtoken": localStorage.getItem('Auth_Token')
      }
    });
    const json = response.json();
    console.log(json)

    const newNote = notes.filter((note) => { return note._id !== id });
    setnotes(newNote)
  }

  const searchNotes = async (query) => {
    try {
      // API Call
      const response = await fetch(`${host}/api/notes/search?query=${query}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authtoken': localStorage.getItem('Auth_Token')
        }
      });
  
      // Check if request was successful
      if (!response.ok) {
        throw new Error('Failed to search notes');
      }
  
      // Process response JSON
      const data = await response.json();
      return data; // Return the search results
    } catch (error) {
      console.error('Error searching notes:', error);
      // Handle error (e.g., show error message to user)
      return []; // Return an empty array in case of error
    }
  };
  


 //edit a note
const editNote = async (id, title, description, tag) => {
  try {
    // api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "authtoken": localStorage.getItem('Auth_Token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    // Logic to edit in client
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        // Update title, description, and tag
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;

        // Add updatedAt field with current date and time
        newNotes[index].updatedAt = new Date().toISOString();
        break;
      }
    }

    // Update the state with the modified note
    setnotes(newNotes);
  } catch (error) {
    console.error('Error updating note:', error);
    // Handle error
  }
};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes,searchNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
