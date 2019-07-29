import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPostsFromServer} from '../Actions/Actions';
import PostsPlaceholder from './Placeholders/PostsPlaceholder';
import {Helmet} from 'react-helmet';
import '../App.css';
import '../Styles/Post.css';

class Posts extends Component { 
  render() {
    const {Posts} = this.props;
    const showAllPosts=()=>{
        return Posts.map(post=>{
            const {_id, alias,title,image, imgPictureCredit,articleBody} = post;
            const readMore=()=>articleBody.slice(0,150);
            return(
                    <div key={_id} className="articleBody">
                        <div className="ImageInfo">
                            {image?<img src={image} alt={title} className="articleImage"/>:<img src="https://res.cloudinary.com/mohitnegi724/image/upload/v1564388110/React%20Project/loading_yhtnxj.jpg" alt={title} className="articleImage"/>}
                            {imgPictureCredit ?<p className="pictureCredits">{imgPictureCredit}</p> :null}
                        </div>
                        <div className="articleDesc">
                          <Link to={"/article/"+alias} key={_id}>
                            <React.Fragment>
                            <p className="articleTitle">{title.toUpperCase()}</p>
                            <p className="para">{readMore()}...</p>
                            <button className="readMore">Read More....</button>
                            </React.Fragment>
                          </Link>
                        </div>
                    </div>
            )
        });
    };
    const decideShowPosts=()=>{
      if(Object.keys(this.props.Posts).length>0){
        return(
            <React.Fragment>
              <Helmet>
                <title>
                  Mern App By mohitnegi724 | mohitnegi.me
                </title>
                <meta charSet="utf-8"/>
                <meta property="og:title" content="MERN Project | mohitnegi.me"/>
                <meta property="og:description" content="Project Made with React, Node, Expressjs And Mongodb"/>
                <meta property="og:image" content="https://res.cloudinary.com/mohitnegi724/image/upload/v1564223192/React%20Project/Mern-app_hrz90x.jpg"/>
                <meta property="og:url" content={document.documentURI}/>
              </Helmet>
            </React.Fragment>
        )
      }else if(Object.keys(this.props.Posts).length<-1){
        return(
          <div>
            <h3>No Posts Available! Create Some Posts</h3>
          </div>
        )
      }else{
        return (
          <PostsPlaceholder/>
        )
      }
    }
    return (
      <React.Fragment>
        {decideShowPosts()}
        {showAllPosts()}
      </React.Fragment>
    )
  }
  componentDidMount(){
    this.props.dispatchPosts();
  }
}


const mapStateToProps=state=>{
    return {
        Posts:state.Posts
    }
}

const mapDispatchToProps={
    dispatchPosts:fetchPostsFromServer
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);