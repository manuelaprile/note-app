import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import BASE_URL from '../url';

function List() {
  const [notes, setNote] = useState([])

  const getData = async () => {
    const response = await fetch(`${BASE_URL}/api/notes/`)
    const data = await response.json();
    setNote(data);
  }

  const deleteNote = async (id) => {
    axios.delete(`${BASE_URL}/api/notes/${id}`)
      .then(res => {
        getData();
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <div className='notes'>
        <div className='addnote'>
          <Link className='add' to="/create">Add</Link>
        </div>
        <h1>Notes</h1>
        <div className='notes-container'>
          {
            notes.map(note => (
              <div key={note.id} className='note'>
                <li><strong>Title: </strong>{note.content}</li>
                <li>{note.important}</li>
                <li><strong>Date: </strong>{note.date}</li>
                <div className='actions'>
                  <a className='delete' onClick={() => deleteNote(note.id)}>Delete</a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default List