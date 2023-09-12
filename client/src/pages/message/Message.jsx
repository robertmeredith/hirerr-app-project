import './Message.scss'
import { Link, useParams } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import getCurrentUser from '../../utils/getCurrentUser'

const Message = () => {
  const { id } = useParams()
  const queryClient = useQueryClient()

  const currentUser = getCurrentUser()

  // Fetch Messages Query
  const {
    data: messages,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['messages'],
    queryFn: () =>
      newRequest.get(`/messages/conversation/${id}`).then((res) => res.data),
  })

  // Create Message Mutation
  const { mutate } = useMutation({
    mutationFn: (text) =>
      newRequest
        .post(`/messages/`, { desc: text, convId: id })
        .then((res) => res.data),
    onSuccess: () => queryClient.refetchQueries(['messages']),
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    mutate(e.target[0].value)
    e.target[0].value = ''
  }

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link className="link" to="/messages">
            MESSAGES
          </Link>{' '}
          {'>'}
        </span>
        {isLoading ? (
          <h4>Loading...</h4>
        ) : error ? (
          <h4>Something went wrong...</h4>
        ) : (
          <div className="messages">
            {messages.map((message) => {
              return (
                <div
                  className={
                    message.userId === currentUser._id ? 'item owner' : 'item'
                  }
                  key={message._id}
                >
                  <img
                    src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5595c6f8246dae65aba5ab4893d80bc7-1686643600531/2f6e856a-7ec8-43e9-b2f2-ded4cd6c1a18.png"
                    alt=""
                  />
                  <p>{message.desc}</p>
                </div>
              )
            })}
          </div>
        )}
        <hr />

        <form
          action=""
          className="write"
          // onSubmit={(e) => mutate(e.target[0].value)}
          onSubmit={handleSubmit}
        >
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Message
