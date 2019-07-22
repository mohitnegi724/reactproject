import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import '../Styles/AddPlace.css';

class Update extends Component {
  render() {
    return (
      <div id="formBody">
        <Helmet>
            <meta char="utf-8"/>
              <title>
                Update | mohitnegi.me
              </title>
        </Helmet>
        <div className="Form">
          <form method="put" action="/update">
            <input type="text" name="title" placeholder="Place Name" required/>
            <textarea className="textArea"type="text" name="articleBody" placeholder="Place Description" required/>
            <input type="text" name="source" placeholder="Information Source" required/>
            <input type="text" name="image" placeholder="Image Link" required/>
            <input type="text" name="credit" placeholder="credit"/>
            <button type="submit" value="Submit" className="submitPlace">Add Place</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Update;