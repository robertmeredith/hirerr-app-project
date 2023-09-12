import GigCard from '../../components/gigCard/GigCard'
import './Gigs.scss'
import { useState, useRef } from 'react'
// import { gigs } from '../../data'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import { useLocation } from 'react-router-dom'
import getCategoryTitle from '../../utils/getCategoryTitle'

const Gigs = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [sortOrder, setSortOrder] = useState('sales')
  const minRef = useRef()
  const maxRef = useRef()

  // Get search category from the url
  const { search } = useLocation()

  const resort = (type) => {
    setSortOrder(type)
    setOpenMenu(false)
  }

  // React Query API call
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: [
      'gigs',
      search,
      minRef?.current?.value,
      maxRef?.current?.value,
      sortOrder,
    ],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sortOrder}`
        )
        .then((res) => res.data),
  })

  // Refetch results when min or max budget changes
  const applyMinMax = () => {
    refetch()
  }

  // Get category title for page using utility function
  const catTitle = getCategoryTitle(search.split('=')[1])

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          HIRERR {'>'} {catTitle.toUpperCase()}
        </span>
        <h1>{catTitle}</h1>
        <p>
          Explore the boundaries of art and technology with Hirerr's artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="text" placeholder="min" />
            <input ref={maxRef} type="text" placeholder="max" />
            <button onClick={applyMinMax}>Apply</button>
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
        {}

        <div className="cards">
          {isLoading
            ? 'Loading...'
            : error
            ? 'Something went wrong...'
            : data.gigs.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  )
}

export default Gigs
