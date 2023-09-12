import './Orders.scss'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import OrderItem from '../../components/orderItem/OrderItem'
import getCurrentUser from '../../utils/getCurrentUser'

const Orders = () => {
  const currentUser = getCurrentUser()

  const {
    data: orders,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['orders'],
    queryFn: () => newRequest.get('/orders').then((res) => res.data),
  })

  return (
    <div className="my-orders">
      {isLoading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>Something went wrong </h3>
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
            <Link to="/add"></Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>{currentUser?.isSeller ? 'Buyer' : 'Seller'}</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {/* SINGLE GIG */}
              {orders.map((order) => (
                <OrderItem order={order} key={order._id} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Orders
