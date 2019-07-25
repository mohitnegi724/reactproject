import React, { Component } from 'react';
import {fetchPostFromServer, deletePost,unmountPost,UpdatePost} from '../Actions/Actions';
import PostPlaceholder from '../Components/Placeholders/PostPlaceholder';
import NotFound from '../Components/NotFound';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import '../Styles/Post.css';

class Post extends Component {
 render() {
    const {deleteIndividualPost,updateFunc} = this.props;
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
    const status = this.props.postStatus;
    const deleteFunc=()=>{
      deleteIndividualPost(Alias);
      this.props.history.push("/");
    };
    
    const updateFunction=()=>{
      updateFunc(Alias);
      this.props.history.push("/update/article/" + Alias);
    };

    const goBack=()=>{
      this.props.history.goBack();
    };

    const showPost=()=>{
      if(Object.keys(this.props.Post).length>0){
        console.log(status);
        return(
          <div>
            <Helmet>
                  <meta charSet="utf-8" />
                  <title>{this.props.Post.title}</title>
            </Helmet>
            <button className="backButton" onClick={()=>goBack()}>
                  Go Back
            </button>
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
              onClick = {() =>deleteFunc()}> 
                Delete This Post
              </button>

              <button type="button"
              className = "updateButton"
              onClick = {() =>updateFunction()}> 
                Update This Post
              </button>
            </div>
          </div>
        )
      }else if(status===404){
        return(
          <NotFound/>
        )
      }else{
        return(
          <PostPlaceholder/>
        )
      }
    }

    return (
      <React.Fragment>
        {showPost()}
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
    Post: state.Post,
    postStatus:state.postStatus
  }
}

const mapDispatchToProps = {
  dispatchPost: fetchPostFromServer,
  deleteIndividualPost:deletePost,
  unmountPost,
  updateFunc: UpdatePost
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);