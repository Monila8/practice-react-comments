import axios from "axios"

const commentsService = axios.create({
    baseURL: "http://localhost:3001/comments"
})

commentsService.read = function readComments() {
    return commentsService.get()
}

commentsService.create = function createComment(comment) {
    return commentsService.post(comment)
}

export default commentsService