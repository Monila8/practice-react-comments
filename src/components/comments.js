import axios from "axios"
import { useEffect, useState } from "react"

function Comments() {
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])
  function handleCommentChange(event) {
    setComment(event.target.value)
  }

  function fetchComments() {
    axios
      .get("http://localhost:3001/comments")
      .then(function onSuccess(params) {
        console.log(params.data)
        setComments(params.data)
      })
      .catch(function onError(params) {
        alert("Error")
      })
  }
  // to know when the component is loaded
  useEffect(() => {
    fetchComments()
  }, [])

  function handleSendBtnClick() {
    axios
      .post("http://localhost:3001/comments", {
        message: comment,
        active: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
      .then(function onSucces(params) {
        setComment("")
        fetchComments()
      })
      .catch(function onError(params) {
        alert("Error")
      })
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
      {/* jsx className, onChange, value, onClick */}
      {comments.map((c) => (
        <li>
          {c.message} <button>Delete</button>
        </li>
      ))}
    </div>
  )
}

export default Comments
