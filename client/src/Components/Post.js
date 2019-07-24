import React, { Component } from 'react';
import {fetchPostFromServer, deletePost,unmountPost} from '../Actions/Actions';
import PostPlaceholder from '../Components/Placeholders/PostPlaceholder'
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import '../Styles/Post.css';

class Post extends Component {
  render() {
    const {deleteIndividualPost} = this.props;
    const {
      articleBody,
      image,
      imgPictureCredit,
      publishDate,
      source,
      title,
      _id
    } = this.props.Post;
    const Alias = this.props.match.params.id;
    console.log("Alias ", Alias);
    return (
      <React.Fragment>
      {Object.keys(this.props.Post).length>0?<div>
        <Helmet>
              <meta charSet="utf-8" />
              <title>{this.props.Post.title}</title>
        </Helmet>
        <div key={_id} className="openedPostBody">
          <h3 className="openedPostTitle">{title}</h3>
          <div className="postImageInfo">
            <img src={image} alt={title} className="openedPostImage"/>
            <p>Picture Credits:{imgPictureCredit}</p>
          </div>
          <p>Publish Date : {new Date(Number(publishDate)).toLocaleDateString()}</p>
          <p>{articleBody}</p>
          <strong><p>Source : {source}</p></strong>
          <button type = "delete"
          className = "deleteButton"
          onClick = {() => deleteIndividualPost(this.props.match.params.id)}> 
            Delete This Post
          </button>
        </div>
      </div>:<PostPlaceholder/>}
    </React.Fragment>
    )
  }
  componentDidMount(){
    const {dispatchPost} = this.props;
    const id= this.props.match.params.id;
    return dispatchPost(id);
  }
  componentWillUnmount(){
    this.props.unmountPost()
  }
}

const mapStateToProps = state => {
  return {
    Post: state.Post
  }
}

const mapDispatchToProps = {
  dispatchPost: fetchPostFromServer,
  deleteIndividualPost:deletePost,
  unmountPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);