import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchDataFromServer} from '../Actions/Actions';
import {Helmet} from 'react-helmet';
import '../App.css';
import '../Styles/Post.css';

class Posts extends Component {
  render() {
    const {Posts} = this.props;
    const showPosts=()=>{
        return Posts.map(post=>{
            const {_id, alias,title,image, imgPictureCredit, source,articleBody} = post;
            return(
                <Link to={"/article/"+alias} key={_id}>
                    <div key={_id} className="articleBody">
                        <div className="ImageInfo">
                            <img src={image} alt={title} className="articleImage"/>
                            {imgPictureCredit ?<p className="pictureCredits">{imgPictureCredit}</p> :null}
                        </div>
                        <div className="articleDesc">
                            <h3 className="articleTitle">{title}</h3>
                            <p >{articleBody}</p>
                            <p>Source :{source}</p>
                        </div>
                    </div>
                </Link>
            )
        });
    };
    return (
      <div>
        {this.props.Posts?<div>
            <Helmet>
              <meta charSet="utf-8"/>
                <title>
                    MERN Project | mohitnegi.me
                </title>
          </Helmet>
        </div>:<p>Loading Posts</p>}
        {showPosts()}
      </div>
    )
  }
  componentDidMount(){
      this.props.dispatchPosts()
  }
}


const mapStateToProps=state=>{
    return {
        Posts:state.Posts
    }
}

const mapDispatchToProps={
        dispatchPosts:fetchDataFromServer
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);