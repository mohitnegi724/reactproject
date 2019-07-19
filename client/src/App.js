import React, {Component} from 'react';
import {BrowserRouter,Link, Router} from 'react-router-dom';
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      places: []
    };
  }
  componentDidMount(){
    fetch('/articles').then(res => res.json()).then(data => this.setState({places:data})).catch(err => console.log(err.msg));
    console.log("API Called Successfully");
  }
  showData=()=>{
    const {places}= this.state;
    return places.map(place=>{
      return(
        <div key={place._id} className="articleBody">
          <h3 className="articleTitle">{place.title}</h3>
          <img src={place.image} alt={place.title} className="articleImage"/>
          {place.imgPictureCredit ? <a href={place.image}><p className="pictureCredits">Picture Credits : {place.imgPictureCredit}</p></a> :null}
          <div className="articleDesc">
            <p >{place.articleBody}</p>
            <p>Source : <a href={place.source}>{place.source}</a></p>
          </div>
        </div>
      )
    })
  }
  render(){
    return(
      <React.Fragment>
        <div>
          <header>
            <h4>Go Guide!</h4>
            <button className="addPlaceButton">Add New Place!</button>
          </header>
          <div className="container">
            {this.showData()}
          </div>
          {/* {this.state.places && this.state.places>-1?this.showData():<p>Places Are Coming..</p>} */}
        </div>
      </React.Fragment>
    )
  }
}




export default App;
