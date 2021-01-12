import React from 'react';

class Tweets extends React.Component {
  constructor(props) {
    this.state = {
      tweets: {
        tweet0: {text: 'this is a tweet', date: new Date()},
        tweet1: {text: 'this is also a tweet', date: new Date()}
      }
    }
  }

  render() {
    let oldTweets = [];
    for (key in this.state.tweets) {
      oldTweets.push([key.text, key.date])
    }

    const toDateString = (date) => {
      const month = date.getUTCMonth() + 1;
      const day = date.getUTCDate();
      const year = date.getUTCFullYear();

      return month + "/" + day + "/" + year;
    }

  }
}

export default Tweets;
