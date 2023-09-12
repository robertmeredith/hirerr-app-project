import './GigCard.scss'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'

const GigCard = ({ item }) => {

  // Fetch users
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user', item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((response) => response.data),
  })

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gig-card">
        <img src="./img/heart.png" alt="" className="heart" />
        <img src={item.cover} alt="" />
        <div className="info">
          <div className="user">
            <img src={user?.img || '/img/noavatr.jpg'} alt="" />
            <span>{user?.username}</span>
          </div>
          <p className="desc">{item.title}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
        </div>
        <div className="details">
          <div className="price">
            <span>From</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default GigCard
