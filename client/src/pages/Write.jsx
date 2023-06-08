import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Write() {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState('');
  const[error, setError]= useState('');

  const navigate = useNavigate('');

  const handleClick = (e) => {
    e.preventDefault()
    const postData = { title, file, cat };
    fetch('http://localhost:9292/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    })
      .then((res) => {
        if (res.status === 201) {
          alert('Post created successfully');
          navigate('/');
        } else {
          throw new Error('Failed to create post');
        }
      })
      .catch((error) => {
        setError(error.message);
      });
    
  }
  
  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='title' onChange={e=>setTitle(e.target.value)}/>
        <div className="editorcontainer">
            <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
          </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input style={{display: "none"}} type="file" name='' id='file' onChange={e=>setFile(e.target.value)}/>
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name='cat' value='art' id='art' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="art">ART</label>
          </div>

          <div className="cat">
            <input type="radio" name='cat' value='science' id='science' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="science">SCIENCE</label>
          </div>

          <div className="cat">
            <input type="radio" name='cat' value='food' id='food' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="food">FOOD</label>
          </div>

          <div className="cat">
            <input type="radio" name='cat' value='design' id='design' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="design">DESIGN</label>
          </div>

          <div className="cat">
              <input type="radio" name='cat' value='technology' id='technology' onChange={e=>setCat(e.target.value)}/>
              <label htmlFor="technology">TECHNOLOGY</label>
          </div>

          <div className="cat">
            <input type="radio" name='cat' value='cinema' id='cinema' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="cinema">CINEMA</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
