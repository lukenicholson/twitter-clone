import React from 'react';
// import {toDateString} from '../util';


class Tweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: {
        tweet0: { text: 'this is a tweet', date: new Date() },
        tweet1: { text: 'this is also a tweet', date: new Date() }
      },
      newTweetIdx: 0
    }
  }

  createTweet = (tweetText) => {
    const tweetIdx = this.state.newTweetIdx;
    const tweetName = 'tweet' + tweetIdx;
    const tweetObj = {text: tweetText, date: new Date()}
    this.setState(this.state.tweets[tweetName] = tweetObj)
    this.setState({newTweetIdx: tweetIdx + 1})
  }

  getTweetText = (tweetName) => {
    const selectedTweet = this.state.tweets[tweetName]
    const tweetText = selectedTweet[text]
    return tweetText
  }

  editTweet = (tweetName, tweetText) => {
    this.setState(this.state.tweets[tweetName] = tweetText)
  }

  deleteTweet = (tweetName) => {
    this.setState( delete this.state.tweets[tweetName])
  }

  render() {

    let oldTweets = [];

    for (let key in this.state.tweets) {
      console.log('this key is ' + key)
      console.log('this keys text value is ' + this.state.tweets.key)
      oldTweets.push([key.text, key.date])
    }

    console.log(oldTweets);

    return (
      <>
        <div className='newTweetContainer'>
          <input placeholder='write a tweet' id="tweetForm">
          </input>
        </div>
        <div className='tweetContainer'>
          <p> where the old tweets will go</p>
          <button className="delete">delete</button>
          <button className="edit">edit</button>
        </div>
      </>
    )
  }
}

export default Tweets;
