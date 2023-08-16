import { combineReducers } from "redux"
import commentsReducer from "./comments-reducer"
import currentCommentReducer from "./current-comment-reducer"

export default combineReducers({
  comments: commentsReducer,
  currentComment: currentCommentReducer,
})
