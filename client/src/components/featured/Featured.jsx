import './Featured.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Featured = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate(`/gigs?search=${search}`)
  }

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the right <i>freelance</i> service, right away
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for any service..."
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          {/* Popular */}
          <div className="popular">
            <span>Popular:</span>
            <button>Website Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man-1.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Featured
