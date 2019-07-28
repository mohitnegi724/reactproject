import React from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import '../Styles/AddPlace.css';
  

const AddPlace=()=>{
  return (
      <div id="formBody">
        <Helmet>
            <meta char="utf-8"/>
              <title>
                Add New Place | mohitnegi.me
              </title>
        </Helmet>
        <div className="Form">
          <form method="post" action="/create">
            <label>Title</label>
            <input type="text" name="title" placeholder="Place Name" required/>
            <br/>                                     
            <label>Article Body</label>
            <textarea className="textArea"type="text" name="articleBody" placeholder="Place Description" required/>
            <br/>
            <label>Information Source</label>
            <input type="text" name="source" placeholder="Information Source"/>
            <br/>
            <label>Information Source Link</label>
            <input type="text" name="sourceLink" placeholder="Information Source Link"/>
            <br/>
            <label>Image</label>
            <input type="text" name="image" placeholder="Image Link" required/>
            <br/>
            <label>Picture Credits</label>
            <input type="text" name="imgPictureCredit" placeholder="Picture Credits"/>
            <br/>
            <label>Picture Credits</label>
            <input type="text" name="imgPictureCreditLink" placeholder="Picture Credit's Link"/>
            <button type="submit" value="Submit" className="submitPlace">Add Place</button>
          </form>
          <Link to="/">
            <button type="button" value="cancel" className="cancelAdd">
                Cancel
            </button>
          </Link>
        </div>
      </div>
    )
}


export default AddPlace;