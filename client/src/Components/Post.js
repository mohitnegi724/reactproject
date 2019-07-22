import React, { Component } from 'react';
import {fetchPostFromServer} from '../Actions/Actions';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import '../Styles/Post.css';

class Post extends Component {
  render() {
    const {articleBody, image, imgPictureCredit, publishDate, source,title,_id} = this.props.Post;
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
      </div>:<p>Loading</p>}
    </React.Fragment>
    )
  }
  componentDidMount(){
    const {dispatchPost} = this.props;
    const id= this.props.match.params.id;
    return dispatchPost(id)
  }
}

const mapStateToProps = state => {
  return {
    Post: state.Post
  }
}

const mapDispatchToProps = {
  dispatchPost: fetchPostFromServer
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);