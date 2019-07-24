import React, {Component} from 'react';
import '../../Styles/PostPlaceholder.css';


class PostPlaceholder extends Component {
    render() {
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
    componentDidMount(){
        console.log("Placeholder updated");
        
    }
}

export default PostPlaceholder;