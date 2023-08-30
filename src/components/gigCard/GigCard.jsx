import './GigCard.scss'
import { Link } from 'react-router-dom'

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123" className='link'>
      <div className="gig-card">
        <img src="./img/heart.png" alt="" className='heart' />
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p className='desc'>{item.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{item.star}</span>
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
