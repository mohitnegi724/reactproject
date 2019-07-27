import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import {UpdatePost, unmountPost} from '../Actions/Actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../Styles/AddPlace.css';

class Update extends Component {
  state={
    updateThisPost:{}
  };
  render() {
    const {Post} = this.props;
    const {alias,title,articleBody, source, sourceLink, image, imgPictureCredit, imgPictureCreditLink} = this.state.updateThisPost;
    
    const dataChangeHandler=e=>{
      this.setState({
        updateThisPost:{
          [e.target.name]:e.target.value
        }
      });
    };


    return (
      <div>
      {Object.keys(Post).length>0?<div id="formBody">
        <Helmet>
            <meta char="utf-8"/>
              <title>
                Update | mohitnegi.me
              </title>
        </Helmet>
        <div className="Form">
          <form method="post" action={`/update/article/${alias}`}>
            <label>Title</label>
            <input value={title} onChange={(e)=>dataChangeHandler(e)} type="text" name="title" placeholder="Place Name" required/>
            <br/>
            <label>Article Body</label>
            <textarea value={articleBody} onChange={(e)=>dataChangeHandler(e)} className="textArea"type="text" name="articleBody" placeholder="Place Description" required/>
            <br/>
            <label>Information Source</label>
            <input value={source} onChange={(e)=>dataChangeHandler(e)} type="text" name="source" placeholder="Information Source"/>
            <br/>
            <label>Information Source Link</label>
            <input value={sourceLink} onChange={(e)=>dataChangeHandler(e)} type="text" name="sourceLink" placeholder="Information Source Link"/>
            <br/>
            <label>Image</label>
            <input value={image} onChange={(e)=>dataChangeHandler(e)} type="text" name="image" placeholder="Image Link" required/>
            <br/>
            <label>Picture Credits</label>
            <input value={imgPictureCredit} onChange={(e)=>dataChangeHandler(e)} type="text" name="imgPictureCredit" placeholder="Picture Credits"/>
            <br/>
            <label>Picture Credits</label>
            <input value={imgPictureCreditLink} onChange={(e)=>dataChangeHandler(e)} type="text" name="imgPictureCreditLink" placeholder="Picture Credit's Link"/>
            <br/>
            <button type="submit" value="Submit" className="submitPlace">Update Place</button>
          </form>



          <Link to="/">
            <button type="button" value="cancel" className="cancelAdd">
                Cancel
            </button>
          </Link>
            </div>
            </div>:
            <div>
              <div className="Form">
                  <form>
                    <label>Title</label>
                    <br/>
                    <input defaultValue="Loading..." type="text" name="title" placeholder="Place Name"/>
                    <label>Article Body</label>
                    <br/>
                    <textarea className="textArea"type="text" name="articleBody" placeholder="Place Description" defaultValue="Loading..."/>
                    <label>Information Source Link</label>
                    <br/>
                    <input type="text" name="source" placeholder="Information Source" defaultValue="Loading..."/>
                    <label>Image</label>
                    <br/>
                    <input type="text" name="image" placeholder="Image Link" defaultValue="Loading..."/>
                    <label>Picture Credits</label>
                    <br/>
                    <input type="text" name="credit" placeholder="credit" defaultValue="Loading..."/>
                  </form>
                </div>
              </div>
          }
      </div>
    )
  }

  componentDidMount(){
    this.props.UpdatePost(this.props.match.params.id)
  }

  componentWillUnmount(){
    this.props.unmountPost()
  }

  static  getDerivedStateFromProps(props, state){
    if (props.Post) {
      return{
        updateThisPost:props.Post
      }
    }
    return null
  }
}

const mapStateToProps=state=>{
  return{
    Post:state.Post
  }
}

const maptDispatchToProps={
  UpdatePost,
  unmountPost
}

export default connect(mapStateToProps, maptDispatchToProps)(Update);