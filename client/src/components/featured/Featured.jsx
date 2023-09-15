import './Featured.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Featured = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
     navigate(`/gigs?search=${search}`)
  }

  const handleCatSearch = (searchValue) => {
    navigate(`/gigs?cat=${searchValue}`)
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
            <button onClick={handleSearch}>Search</button>
          </div>
          {/* Popular */}
          <div className="popular">
            <span>Popular:</span>
            <button onClick={() => handleCatSearch('web-design')}>
              Website Design
            </button>
            <button onClick={() => handleCatSearch('ai-services')}>
              AI Services
            </button>
            <button onClick={() => handleCatSearch('wordpress')}>Wordpress</button>
            <button onClick={() => handleCatSearch('logo-design')}>
              Logo Design
            </button>
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
