import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import BASE_URL from '../url';

function Create() {

  const [content, setContent] = useState('');
  const [select, setSelect] = useState('');

  const addNote = async () => {

    const newNote = {
      content,
      important: select !== 'Important' ? false : true,
      date: new Date().toISOString()
    }

    axios.post(`${BASE_URL}/api/notes/`, newNote)
      .then(res => {
        console.log(res)
      })
    setContent('');
    alert('Note added succesfully!')
  }

  return (
    <div className="App">
      <div className='notes'>
        <div className='addnote'>
          <Link className='add' to="/">Back</Link>
        </div>
        <h1>Create</h1>
        <div className='createnote'>
          <div className='form'>
            <label>Content</label>
            <input type='text' className='input' placeholder='Note content' value={content} onChange={(e) => setContent(e.target.value)}></input>
            <label>Important</label>
            <select value={select} className='input' onChange={(e) => setSelect(e.target.value)}>
              <option>Not Important</option>
              <option>Important</option>
            </select>
          </div>
          <div className='actions'>
            <a className='create' onClick={addNote}>Add note</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Create