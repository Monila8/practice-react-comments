import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import commentsService from "../services/commentsService"
import ItemComments from "./item-comments"

function ListComments() {
  const comments = useSelector((state) => state.comments)
  const dispatch = useDispatch()

  function fetchComments() {
    commentsService.read()
      .then(function onSuccess(response) {
        const commentsData = response.data

        dispatch({
          type: "ADD_COMMENTS",
          payload: commentsData,
        })
      })
      .catch(function onError(params) {
        alert("Error")
      })
  }

  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <ul>
      {comments.map((c) => (
        <ItemComments
          key={c.id}
          c={c}
        />
      ))}
    </ul>
  )
}

export default ListComments
