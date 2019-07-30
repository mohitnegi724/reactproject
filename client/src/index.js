import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './Reducer/rootReducer';
import Thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';


const store = createStore(rootReducer, applyMiddleware(Thunk));
store.subscribe(()=>console.log(store.getState()))

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
