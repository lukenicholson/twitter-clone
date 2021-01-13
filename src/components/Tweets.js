import React from 'react';
// import {toDateString} from '../util';


class Tweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: {
        tweet0: { tweetText: 'this is a tweet', date: new Date() },
        tweet1: { tweetText: 'this is also a tweet', date: new Date() }
      },
      newTweetIdx: 0
    }
  }

  createTweet = (newTweetText) => {
    const tweetIdx = this.state.newTweetIdx;
    const tweetName = 'tweet' + tweetIdx;
    const tweetObj = {tweetText: newTweetText, date: new Date()}
    this.setState(this.state.tweets[tweetName] = tweetObj)
    this.setState({newTweetIdx: tweetIdx + 1})
  }

  getTweetText = (tweetName) => {
    const selectedTweet = this.state.tweets[tweetName]
    const selectedTweetText = selectedTweet["tweetText"]
    return selectedTweetText
  }

  editTweet = (tweetName, newTweetText) => {
    this.setState(this.state.tweets.tweetName["tweetText"] = newTweetText)
  }

  deleteTweet = (tweetName) => {
    this.setState( delete this.state.tweets[tweetName])
  }

  toDateString = (dateObj) => {
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    return month + "/" + day + "/" + year;
  }

  render() {

    let oldTweets = [];
    console.log('hello?')

    for (let tweet in this.state.tweets) {
      console.log('this tweets name is ' + tweet)
      console.log('this tweets contents are ' + this.state.tweets[tweet])
      oldTweets.push([tweet["tweetText"], tweet["date"]])
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
