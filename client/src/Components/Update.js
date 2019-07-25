import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import {UpdatePost} from '../Actions/Actions';
import {connect} from 'react-redux';
import '../Styles/AddPlace.css';

class Update extends Component {
  render() {
    const {Post} = this.props;
    console.log("updatePost ", Post);
    return (
      <div>
      {Object.keys(Post)>0?<div id="formBody">
        <Helmet>
            <meta char="utf-8"/>
              <title>
                Update | mohitnegi.me
              </title>
        </Helmet>
        <div className="Form">
          <form method="put" action="/update">
            <input value={Post.title} type="text" name="title" placeholder="Place Name" required/>
            <textarea className="textArea"type="text" name="articleBody" placeholder="Place Description" value={Post.articleBody} required/>
            <input type="text" name="source" placeholder="Information Source" value={Post.source} required/>
            <input type="text" name="image" placeholder="Image Link" value={Post.image} required/>
            <input type="text" name="credit" placeholder="credit" value={Post.imgpictureCredit}/>
            <button type="submit" value="Submit" className="submitPlace">Add Place</button>
          </form>
        </div>
      </div>:<p>PostLoading</p>}
      </div>
    )
  }
  componentDidMount(){
    this.props.UpdatePost(this.props.match.params.id)
  }
}

const mapStateToProps=state=>{
  return{
    Post:state.Post
  }
}

const maptDispatchToProps={
  UpdatePost
}

export default connect(mapStateToProps, maptDispatchToProps)(Update);