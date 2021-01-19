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
      newTweetIdx: 2
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
    this.setState(this.state.tweets[tweetName]["tweetText"] = newTweetText)
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
    console.log('rendering...')

    for (let tweet in this.state.tweets) {
      // console.log('this tweets name is ' + tweet)
      // console.log('this tweets text is "' + this.state.tweets[tweet]["tweetText"] + '"')
      // console.log('this tweets date is ' + this.toDateString(this.state.tweets[tweet]["date"]))
      oldTweets.push([tweet, this.state.tweets[tweet]["tweetText"], this.state.tweets[tweet]["date"]])
      // in oldTweets array, 0 idx is tweetName, 1 idx is tweetText, 2 idx is date
    }

    console.log(oldTweets);

    return (
      <>
        <div className='newTweetContainer'>
          <form>
            <input placeholder='write a tweet' id="tweetForm">
            </input>
            <button className="sendButton" onClick={(e) => this.createTweet(e.target.value)}> Send Tweet
            </button>
          </form>
        </div>
        <div className='oldTweetsContainer'>
          {oldTweets.map((tweetArr) => (
            <div className='oldTweet'id={tweetArr[0]} >
              <p>{tweetArr[1]}</p>
              <span>{this.toDateString(tweetArr[2])}</span>
              <button className="delete" onClick={(e) => this.deleteTweet(tweetArr[0])}>delete</button>
              <button className="edit">edit</button>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default Tweets;
