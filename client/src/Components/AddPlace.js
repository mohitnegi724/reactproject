import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import '../Styles/AddPlace.css';

class AddPlace extends Component {
  render() {
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
            <input type="text" name="title" placeholder="Place Name" required/>
            <textarea className="textArea"type="text" name="articleBody" placeholder="Place Description" required/>
            <input type="text" name="source" placeholder="Information Source" required/>
            <input type="text" name="image" placeholder="Image Link" required/>
            <input type="text" name="credit" placeholder="credit"/>
            <br/>
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
}

export default AddPlace;