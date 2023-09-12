import './Messages.scss'
import { Link } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import getCurrentUser from '../../utils/getCurrentUser'
dayjs.extend(relativeTime)

const Messages = () => {
  const queryClient = useQueryClient()
  const currentUser = getCurrentUser()


  const {
    data: conversations,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['conversations'],
    queryFn: () => newRequest.get('/conversations').then((res) => res.data),
  })

  // Mutation
  const { mutate } = useMutation({
    mutationFn: (convId) =>
      newRequest.put(`/conversations/${convId}`).then((res) => res.data),
    onSuccess: () => queryClient.invalidateQueries(['conversations']),
  })

  return (
    <div className="messages">
      {isLoading ? (
        <h4>Loading...</h4>
      ) : error ? (
        <h4>Something went wrong...</h4>
      ) : (
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
            <Link to="/add"></Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>{currentUser.isSeller ? 'Buyer ID' : 'Seller ID'}</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* SINGLE MESSAGE */}
              {conversations.map((conv) => {
                return (
                  <tr
                    className={
                      (currentUser.isSeller && !conv.readBySeller) ||
                      (!currentUser.isSeller && !conv.readByBuyer)
                        ? 'active'
                        : ''
                    }
                    key={conv.convId}
                  >
                    <td>
                      {currentUser.isSeller ? conv.buyerId : conv.sellerId}
                    </td>
                    <td>
                      <Link to={`/message/${conv.convId}`} className="link">
                        {conv.lastMessage?.substring(0, 100)}...
                      </Link>
                    </td>
                    <td>{dayjs(conv.updatedAt).fromNow()}</td>
                    <td>
                      {/* {((currentUser.isSeller && !conv.readBySeller) ||
                        (!currentUser.isSeller && !conv.readByBuyer)) && (
                        
                      )} */}
                      {(currentUser.isSeller && !conv.readBySeller) ||
                      (!currentUser.isSeller && !conv.readByBuyer) ? (
                        <button onClick={() => mutate(conv.convId)}>
                          Mark as Read
                        </button>
                      ) : (
                        <button onClick={() => mutate(conv.convId)}>
                          Mark Unread
                        </button>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Messages
