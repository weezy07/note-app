import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import noteReducer from './reducers/noteReducer';
import {Provider} from 'react-redux'

let initialState = [{id:1,title:'Go to Park',desc:"Walking and running",date:'2020-07-23'}];

if( localStorage.getItem("notes") === null)
localStorage.setItem('notes',JSON.stringify(initialState));
else 
initialState = JSON.parse(localStorage.getItem('notes'));

const store = createStore(noteReducer,initialState);


ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
