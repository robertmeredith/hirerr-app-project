import newRequest from '../../utils/newRequest'
import './SingleReview.scss'
import { useQuery } from '@tanstack/react-query'

const SingleReview = ({ review }) => {
  console.log('REVIEW ', review)

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['reviewUser', review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => res.data),
  })


  return (
    <div className="item">
      {isLoading ? (
        'Loading...'
      ) : error ? (
        'Something went wrong'
      ) : (
        <div className="user">
          <img
            className="profile-image"
            src={user.img || '/img/noavatar.jpg'}
            alt=""
          />
          <div className="info">
            <span>{user.username}</span>
            <div className="country">
              <span>{user.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {/* Create Stars */}
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img src="/img/star.png" alt="" key={i} />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/img/like.png" alt="" />
        <span>Yes</span>
        <img src="/img/dislike.png" alt="" />
        <span>No</span>
      </div>
      <hr />
    </div>
  )
}

export default SingleReview
