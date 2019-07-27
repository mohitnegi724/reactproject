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
    console.log(this.props);
    const {Posts} = this.props;
    const showPosts=()=>{
        return Posts.map(post=>{
            const {_id, alias,title,image, imgPictureCredit,articleBody} = post;
            const readMore=()=>articleBody.slice(0,150);
            return(
                    <div key={_id} className="articleBody">
                        <div className="ImageInfo">
                            <img src={image} alt={title} className="articleImage"/>
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
    return (
      <React.Fragment>
        {Object.keys(this.props.Posts).length>0?<React.Fragment>
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
        </React.Fragment>:<PostsPlaceholder/>}
        {showPosts()}
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