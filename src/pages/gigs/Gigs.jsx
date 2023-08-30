import GigCard from '../../components/gigCard/GigCard'
import './Gigs.scss'
import { useState } from 'react'
import { gigs } from '../../data'

const Gigs = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [sortOrder, setSortOrder] = useState('sales')

  const resort = (type) => {
    setSortOrder(type)
    setOpenMenu(false)
  }

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          HIRERR {'>'} GRAPHICS & DESIGN {'>'}
        </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Hirerr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sort-by">Sort by</span>
            <span className="sort-type">
              {sortOrder === 'sales' ? 'Best Selling' : 'Newest'}
            </span>
            <img
              src="./img/down.png"
              alt=""
              onClick={() => setOpenMenu(!openMenu)}
            />
            {openMenu && (
              <div className="right-menu">
                {sortOrder === 'sales' ? (
                  <span onClick={() => resort('createdAt')}>Newest</span>
                ) : (
                  <span onClick={() => resort('sales')}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* CARDS CONTAINER */}
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs
