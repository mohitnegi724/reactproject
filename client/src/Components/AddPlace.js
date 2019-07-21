import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
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
            <input type="text" name="title" placeholder="Place Name"/>
            <textarea className="textArea"type="text" name="articleBody" placeholder="Place Description"/>
            <input type="text" name="source" placeholder="Information Source"/>
            <input type="text" name="image" placeholder="Image Link"/>
            <input type="text" name="credit" placeholder="credit"/>
            <button type="submit" value="Submit" className="submitPlace">Add Place</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddPlace;