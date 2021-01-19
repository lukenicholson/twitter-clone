import tweetsReducer from './Tweets'
import { combineReducers } from "redux";

const allReducers = combineReducers({
  tweets: tweetsReducer
})
