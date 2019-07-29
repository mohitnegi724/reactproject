import React from 'react';
import '../../Styles/PostsPlaceholder.css';

const PostsPlaceholder =()=>{
    return(
        <div>
            <div className="placeholderContainer">
                    <div className="placeholderImage">
                        <img src="https://res.cloudinary.com/mohitnegi724/image/upload/v1564388110/React%20Project/loading_yhtnxj.jpg" alt="Loading" className="placeHolderArticleImage"/>
                    </div>
                    <div className="floatLeft">
                    <div className="placeholderTitle">
                    </div>
                    <div className="placeholderDescription">
                    </div>
                </div>
            </div>

            <div className="placeholderContainer">
                    <div className="placeholderImage">
                        <img src="https://res.cloudinary.com/mohitnegi724/image/upload/v1564388110/React%20Project/loading_yhtnxj.jpg" alt="Loading" className="placeHolderArticleImage"/>
                    </div>
                    <div className="floatLeft">
                    <div className="placeholderTitle">
                    </div>
                    <div className="placeholderDescription">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostsPlaceholder;