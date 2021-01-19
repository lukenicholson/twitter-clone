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

const createTweet = () => {
  return {
    type: 'CREATETWEET'
  }
}

let tweetsState = {
  tweets: {
    tweet0: { tweetText: 'this is a tweet', date: new Date() },
    tweet1: { tweetText: 'this is also a tweet', date: new Date() }
  },
  newTweetIdx: 2
}

// reducer
const tweets = (state = tweetsState, action) => {
  switch (action.type) {
    case 'CREATETWEET':
      const tweetIdx = state.newTweetIdx;
      const tweetName = 'tweet' + tweetIdx;
      const tweetObj = {tweetText: newTweetText, date: new Date()}
      return state[tweetName] = tweetObj;
      // this.setState({newTweetIdx: tweetIdx + 1})
  }
}


// store

let store = createStore(tweets)

// dispatch


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
