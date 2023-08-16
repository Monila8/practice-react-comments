function commentsReducer(state = [], action) {
  if (action.type === "ADD_COMMENT") {
    return state.concat(action.payload)
  } else if (action.type === "ADD_COMMENTS") {
    return action.payload
  } else if (action.type === "DELETE_COMMENT") {
    return state.filter((c) => c.id !== action.payload)
  } else if (action.type === "UPDATE_COMMENT") {
    //el map recorre sin mutar. 
    //compara el id actual con el id del que viene de la db.
    //si es igual === va a devolver el msj de la db, actualizando el comentario en redux/store (index reducer)
    //de lo contrario, retorna el elemento viejo
    return state.map((c) => {
      const isSameId = c.id === action.payload
      
      if (isSameId) {
        return action.payload
      } else {
        return c
      }
    })
  }

  return state
}

export default commentsReducer
