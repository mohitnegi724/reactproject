import React, { Component } from 'react';
import Posts from './Components/Posts';
import Post from './Components/Post';
import Header from './Components/Header';
import AddPlace from './Components/AddPlace';
import Notfound from './Components/NotFound';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
          <Header/>
          <div className="container">
                <Switch>
                  <Route exact path="/" component={Posts}/>
                  <Route path="/article/:id" component={Post}/>
                  <Route path="/addplace" component={AddPlace}/>
                  <Route path="*" component={Notfound}/>
                </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}


export default App;