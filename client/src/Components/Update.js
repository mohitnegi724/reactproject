import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import {UpdatePost, unmountPost} from '../Actions/Actions';
import {connect} from 'react-redux';
import '../Styles/AddPlace.css';

class Update extends Component {
  state={
    updateThisPost:{}
  }
  render() {
    const {Post} = this.props;
    const {alias,title,articleBody, image, imgPictureCredit, source} = this.state.updateThisPost;
    
    const dataChangeHandler=e=>{
      this.setState({
        updateThisPost:{
          [e.target.name]:e.target.value
        }
      })
    }


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
            <br/>

            <input onChange={(e)=>dataChangeHandler(e)} defaultValue={title} type="text" name="title" placeholder="Place Name" required/>
            
            <label>Article Body</label>
            <br/>


            <textarea className="textArea" type="text" name="articleBody" placeholder="Place Description" defaultValue={articleBody} onChange={(e)=>dataChangeHandler(e)}required/>
            <br/>
            
            <label>Information Source Link</label>
            <br/>
            
            
            <input type="text" name="source" placeholder="Information Source" defaultValue={source} onChange={(e)=>dataChangeHandler(e)}required/>
            
            
            <label>Image</label>
            <br/>
            
            
            <input type="text" name="image" placeholder="Image Link" defaultValue={image} onChange={(e)=>dataChangeHandler(e)}required/>
            
            
            <label>Picture Credits</label>
            <br/>
            
            
            <input type="text" name="credit" placeholder="credit" defaultValue={imgPictureCredit} onChange={(e)=>dataChangeHandler(e)}/>

            <label>Source</label>
            <br/>
            
            
            <input type="text" name="source" placeholder="credit" defaultValue={source} onChange={(e)=>dataChangeHandler(e)}/>
            
            <button type="submit" value="Submit" className="submitPlace">Update Place</button>
          </form>
            </div>
            </div>:
            <div>
              <div className="Form">
                  <form method="put" action="/update">
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