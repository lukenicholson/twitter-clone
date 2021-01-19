import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';


// action
const incrementTweetIdx = () => {
  return {
    type: 'INCREMENTTWEETIDX'
  }
}

let tweetsState = {
    tweet0: { tweetText: 'this is a tweet', date: new Date() },
    tweet1: { tweetText: 'this is also a tweet', date: new Date() }
}

let newTweetIdxState = 2;

// reducer
const tweets = (state = tweetsState) => {

}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
