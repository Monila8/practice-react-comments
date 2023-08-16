import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function AddComments() {
  const [comment, setComment] = useState("")
  const dispatch = useDispatch()
  const currentComment = useSelector((state) => state.currentComment)

  useEffect(() => {
    if (currentComment.id) {
      setComment(currentComment.message)
    }
  }, [currentComment])

  function handleCommentChange(event) {
    setComment(event.target.value)
  }

  //upsert - update + insert
  function handleSendBtnClick() {
    const commentPayload = {
      message: comment,
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    const existCurrentId = currentComment.id

    if (existCurrentId) {
      commentPayload.id = currentComment.id
      delete commentPayload.createdAt

      axios
        .patch(`http://localhost:3001/comments/${commentPayload.id}`, commentPayload)
        .then(function (response) {
          setComment("")
          dispatch({
            type: "UNSET_COMMENT",
          })
          dispatch({
            type: "UPDATE_COMMENT",
            payload: response.data,
          })
        })
    } else {
      commentsService.create(commentPayload)
        .then(function onSucces(response) {
          setComment("")
          dispatch({
            type: "ADD_COMMENT",
            payload: response.data,
          })
        })
        .catch(function onError() {
          alert("Error")
        })
    }
  }

  return (
    <div className="comments">
      <textarea
        cols="50"
        rows="15"
        onChange={handleCommentChange}
        value={comment}></textarea>
      <button
        onClick={handleSendBtnClick}
        disabled={!comment.length}>
        Send
      </button>
    </div>
  )
}

export default AddComments
