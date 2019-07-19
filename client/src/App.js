import React, {Component} from 'react';
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
  }
  showData=()=>{
    console.log(this.state.places)
  }
  render(){
    return(
      <div>
        <div className="App">
          <p>Data We Have Right Now</p>
          {this.state.places>-1?this.showData():<p>Places Are Coming..</p>}
        </div>
      </div>
    )
  }
}




export default App;
