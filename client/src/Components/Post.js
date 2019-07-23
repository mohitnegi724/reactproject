import React, { Component } from 'react';
import {fetchPostFromServer, deletePost,unmountPost} from '../Actions/Actions';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import '../Styles/Post.css';

class Post extends Component {
  render() {
    const {deleteIndividualPost} = this.props;
    const {articleBody,image, imgPictureCredit, publishDate, source,title,_id} = this.props.Post;
    const Alias = this.props.match.params.id;
    console.log(Alias);
    return (
      <React.Fragment>
      {this.props.Post!=={}?<div>
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
          <p>{publishDate}</p>
          <p>{articleBody}</p>
          <strong><p>Source : {source}</p></strong>
        </div>
        <div>
          <button type="delete" onClick={(Alias)=>deleteIndividualPost(Alias)}>Delete This Post</button>
        </div>
      </div>:<p>Loading</p>}
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