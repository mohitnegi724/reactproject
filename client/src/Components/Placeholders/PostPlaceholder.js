import React from 'react';
import '../../Styles/PostPlaceholder.css';

const PostPlaceholder =()=>{
    return(
        <React.Fragment>
                <div className="postPlaceholderContainer">
                    <div className="postPlaceholderTitle">
                    </div>
                    <div className="postPlaceholderImage">
                    </div>
                    <div className="info">
                        <div className="postPlaceholderDescription">
                            <div className="postPlaceholderDate">
                            </div>
                            <div className="postPlaceholderDetails">
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default PostPlaceholder;