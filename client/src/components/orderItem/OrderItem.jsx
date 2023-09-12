import { useQuery } from '@tanstack/react-query'
import './OrderItem.scss'
import newRequest from '../../utils/newRequest.js'
import { useNavigate } from 'react-router-dom'
import getCurrentUser from '../../utils/getCurrentUser'

const OrderItem = ({ order }) => {
  const navigate = useNavigate()
  const currentUser = getCurrentUser()

  const {
    data: seller,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['seller'],
    queryFn: () =>
      newRequest.get(`/users/${order.sellerId}`).then((res) => res.data),
  })

  // Redirects to conversation page
  const handleContact = async () => {
    const { sellerId, buyerId } = order
    const convId = sellerId + buyerId
    // Checks if conversation between seller and buyer already exists
    try {
      const { data } = await newRequest.get(`/conversations/${convId}`)
      navigate(`/message/${data.convId}`)
    } catch (error) {
      // If doesn't exist - create one
      if (error.response.status === 404) {
        try {
          const { data } = await newRequest.post(`/conversations/`, {
            to: currentUser.isSeller ? buyerId : sellerId,
          })
          navigate(`/message/${data.convId}`)
        } catch (error) {
          console.log(error)
        }
      }
    }
  }

  return (
    <tr key={order._id} className="order-item">
      <td>
        <img className="job-image" src={order.img} alt="" />
      </td>
      <td>{order.title}</td>
      <td>A${order.price}</td>
      <td>{seller?.username}</td>
      <td>
        <img
          className="delete"
          src="/img/message.png"
          alt=""
          onClick={handleContact}
        />
      </td>
    </tr>
  )
}

export default OrderItem
