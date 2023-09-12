import { Link } from 'react-router-dom'
import './CategoryCard.scss'

const CategoryCard = ({ item }) => {
  return (
    <Link to={`/gigs?cat=${item.category}`}>
      <div className="category-card">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
        <div className="container">Category Card</div>
      </div>
    </Link>
  )
}

export default CategoryCard
