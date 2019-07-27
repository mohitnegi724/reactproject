import React, { Component } from 'react';
import {fetchPostFromServer, deletePost,unmountPost,UpdatePost} from '../Actions/Actions';
import PostPlaceholder from '../Components/Placeholders/PostPlaceholder';
import NotFound from '../Components/NotFound';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import '../Styles/Post.css';

class Post extends Component {
 render() {
   console.log("Checking React ",this.props);
    const {deleteIndividualPost,updateFunc} = this.props;
    const {
      articleBody,
      image,
      imgPictureCredit,
      publishDate,
      source,
      sourceLink,
      title,
      imgPictureCreditLink,
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
        return(
          <div>
            <Helmet>
              <title>{this.props.Post.title}</title>
              <meta charSet="utf-8"/>
              <meta property="og:title" content={this.props.Post.title}/>
              <meta property="og:description" content={this.props.Post.articleBody}/>
              <meta property="og:image" content={this.props.Post.image}/>
              <meta property="og:url" content={document.documentURI}/>
            </Helmet>

            <button className="backButton" onClick={()=>goBack()}>
                  Go Back
            </button>
            <div key={_id} className="openedPostBody">
              <h3 className="openedPostTitle">{title}</h3>
              <div className="postImageInfo">
                <img src={image} alt={title} className="openedPostImage"/>
                <p>Picture Credits: <a href={imgPictureCreditLink} target="_blank" rel="noopener noreferrer">{imgPictureCredit}</a></p>
              </div>
              <p>Publish Date : {new Date(Number(publishDate)).toLocaleDateString()}</p>
              <p>{articleBody}</p>
              <strong><p>Source : <a href={sourceLink} target="_blank" rel="noopener noreferrer">{source}</a></p></strong>
              <button type = "delete"
              className = "deleteButton"
              onClick = {() =>deleteFunc()} disabled> 
                Disabled Delete Button
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
    window.scrollTo(0, 0);
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