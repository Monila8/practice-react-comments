function currentCommentReducer(state = {}, action) {
  if (action.type === "SET_COMMENT") {
    return Object.assign({}, action.payload)
  } else if (action.type === "UNSET_COMMENT") {
    return {}
  }
  return state
}

export default currentCommentReducer
