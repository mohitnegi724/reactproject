import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loggedIn} from '../Actions/Actions';
import '../App.css';


class Header extends Component{
    render(){
        const {userLoggedIn,loggedInFunc} = this.props;
        return (
            <div>
                <header>
                <Link to="/"><h4 className="Logo">Your Guide!</h4></Link>
                <Link to="/addplace"><button className="addPlaceButton">Add New Place!</button></Link>
                {userLoggedIn?<Link to="/addplace"><button className="addPlaceButton">Add New Place!</button></Link>:<button className="addPlaceButton" onClick={()=>loggedInFunc()}>Log In</button>}
              </header>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userLoggedIn: state.userLoggedIn
    }
}
const mapDispatchToProps={
    loggedInFunc:loggedIn
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);