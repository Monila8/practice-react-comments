import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"

function ItemComments({ c }) {
  const dispatch = useDispatch()

  function handleDeleteBtnClick() {
    axios
      .delete(`http://localhost:3001/comments/${c.id}`)
      .then(function onSucces() {
        dispatch({
          type: "DELETE_COMMENT",
          payload: c.id,
        })
        toast.success("Wow so easy!", {
          position: "top-center",
        })
      })
      .catch(function onError() {
        alert("Error")
      })
  }
  
  function handleEditBtnClick() {
    dispatch({
      type: "SET_COMMENT",
      payload: c,
    })
  }

  return (
    <li>
      {c.message} <button onClick={handleDeleteBtnClick}>Delete</button>
      <button onClick={handleEditBtnClick}>Edit</button>
    </li>
  )
}
export default ItemComments
