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
