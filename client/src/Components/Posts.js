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
    const showPosts=()=>{
        return Posts.map(post=>{
            const {_id, alias,title,image, imgPictureCredit,articleBody} = post;
            const readMore=()=>articleBody.slice(0,150);
            console.log(readMore());
            return(
                    <div key={_id} className="articleBody">
                        <div className="ImageInfo">
                            <img src={image} alt={title} className="articleImage"/>
                            {imgPictureCredit ?<p className="pictureCredits">{imgPictureCredit}</p> :null}
                        </div>
                        <Link to={"/article/"+alias} key={_id}>
                        <div className="articleDesc">
                            <h4 className="articleTitle">{title.toUpperCase()}</h4>
                            <p>{readMore()}...</p>
                            <button className="readMore">Read More....</button>
                        </div>
                        </Link>
                    </div>
            )
        });
    };
    return (
      <div>
        {Object.keys(this.props.Posts).length>0?<div>
            <Helmet>
              <meta charSet="utf-8"/>
                <title>
                    MERN Project | mohitnegi.me
                </title>
          </Helmet>
        </div>:<PostsPlaceholder/>}
        {showPosts()}
      </div>
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