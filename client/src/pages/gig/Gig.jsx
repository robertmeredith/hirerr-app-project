import './Gig.scss'
import Reviews from '../../components/reviews/Reviews.jsx'
import { Slider } from 'infinite-react-carousel'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import { useParams, Link, useNavigate } from 'react-router-dom'
import getCategoryTitle from '../../utils/getCategoryTitle'
import getCurrentUser from '../../utils/getCurrentUser'

const Gig = () => {
  const { gigId } = useParams()
  const currentUser = getCurrentUser()
  const navigate = useNavigate()

  const {
    data: gig,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['gigs', gigId],
    queryFn: () =>
      newRequest.get(`/gigs/${gigId}`).then((response) => response.data),
  })

  const {
    data: user,
    isLoading: isLoadingUser,
    error: errorUser,
  } = useQuery({
    queryKey: ['user', gig?.userId],
    queryFn: () =>
      newRequest.get(`/users/${gig?.userId}`).then((response) => response.data),
    enabled: !!gig,
  })

  // Redirects top login if user not logged in
  const handleContinue = () => {
    if (!currentUser) {
      navigate('/login')
    } else {
      navigate(`/pay/${gigId}`)
    }
  }

  return (
    <div className="gig">
      {/* Conditionally render gig data */}
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Something went wrong...</h2>
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">
              HIRERR {'>'} {getCategoryTitle(gig.cat).toUpperCase()} {'>'}
            </span>
            <h1>{gig?.title}</h1>

            {/* Conditionally render user data */}
            {isLoadingUser ? (
              <p>Loading...</p>
            ) : errorUser ? (
              <p>Something went wrong</p>
            ) : (
              <div className="user">
                <img
                  className="profile-image"
                  src={user.img || '/img/noavatar.png'}
                  alt=""
                />
                <span>{user.username}</span>
                {/* Only display if there is reviews */}
                {!isNaN(gig.totalStars / gig.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(gig.totalStars / gig.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/img/star.png" alt="" key={i} />
                      ))}
                    <span>{Math.round(gig.totalStars / gig.starNumber)}</span>
                  </div>
                )}
              </div>
            )}
            <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              <img src={gig.images[0]} alt="" />
              <img src={gig.images[1]} alt="" />
              <img src={gig.images[2]} alt="" />
            </Slider>
            <h2>About this gig</h2>
            <p>{gig.desc}</p>

            {/* SELLER SECTION */}
            {/* Conditionally render User info box */}
            {isLoadingUser ? (
              <p>Loading...</p>
            ) : errorUser ? (
              <p>Something went wrong</p>
            ) : (
              <div className="seller">
                <h2>About the seller</h2>
                <div>
                  <div className="user">
                    <img src={user.img} alt="" />

                    <div className="info">
                      <span className="name">{user.username}</span>
                      {/* <span>Minimalist designs that make a lasting impact</span> */}
                      {!isNaN(gig.totalStars / gig.starNumber) && (
                        <div className="stars">
                          {Array(Math.round(gig.totalStars / gig.starNumber))
                            .fill()
                            .map((item, i) => (
                              <img src="/img/star.png" alt="" key={i} />
                            ))}
                          <span>
                            {Math.round(gig.totalStars / gig.starNumber)}
                          </span>
                        </div>
                      )}
                    </div>
                    <button>Contact me</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{user.country || 'NA'}</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">1 hour</span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English</span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">Apr 2021</span>
                    </div>
                    <div className="item">
                      <span className="title">Last delivery</span>
                      <span className="desc">about 1 hour</span>
                    </div>
                  </div>
                  <hr />
                  <p>{user.desc}</p>
                </div>
              </div>
            )}

            {/* REVIEWS SECTION */}
            <Reviews gigId={gigId} />
          </div>

          {/* RIGHT SIDE */}
          <div className="right">
            <div className="price">
              <h2>{gig.shortTitle}</h2>
              <h3>A${gig.price}</h3>
            </div>
            <p>{gig.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/img/clock.png" alt="" />
                <span>{gig.deliveryTime} Day Delivery</span>
              </div>
              <div className="item">
                <img src="/img/recycle.png" alt="" />
                <span>{gig.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {gig.features.map((feat) => (
                <div className="item" key={feat}>
                  <img src="/img/greencheck.png" alt="" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
            <Link className="link-button link">
              <button onClick={handleContinue}>Continue</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gig
