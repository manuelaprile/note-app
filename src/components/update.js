import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link, useParams } from "react-router-dom";
import BASE_URL from '../url';

function Update() {

  const [content, setContent] = useState('');
  const [select, setSelect] = useState('');
  let params = useParams()

  const getNote= async () => {
    const response = await fetch(`${BASE_URL}/api/notes/${params.id}`)
    const data = await response.json();
    setContent(data.content);
    setSelect(data.important);
  }

  const updateNote = async () => {
    let note = {
      content,
      select
    }
    axios.put(`${BASE_URL}/api/notes/${params.id}`, note)
      .then(res => {
        console.log(res)
      })
    setContent('');
    alert('Note updated succesfully!')
  }

  useEffect(() => {
    getNote()
  }, [])

  return (
    <div className="App">
      <div className='notes'>
        <div className='addnote'>
          <Link className='add' to="/">Back</Link>
        </div>
        <h1>Update Note</h1>
        <div className='createnote'>
          <div className='form'>
            <label>Content</label>
            <input type='text' className='input' placeholder='Note content' value={content} onChange={(e) => setContent(e.currentTarget.value)}></input>
            <label>Important</label>
            <select value={select} className='input' onChange={(e) => setSelect(e.currentTarget.value)}>
              <option>Not Important</option>
              <option>Important</option>
            </select>
          </div>
          <div className='actions'>
            <a className='create' onClick={updateNote}>Update note</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Update