import './Reviews.scss'
import SingleReview from '../review/SingleReview'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'

const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient()

  // Fetch reviews query
  const {
    data: reviews,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['reviews', gigId],
    queryFn: () =>
      newRequest.get(`/reviews/gig/${gigId}`).then((res) => res.data),
  })

  // Create review mutation
  const { mutate } = useMutation({
    mutationFn: (review) => newRequest.post(`/reviews/`, review),
    onSuccess: () => queryClient.invalidateQueries(['reviews', gigId]),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const desc = e.target[0].value
    const star = e.target[1].value
    mutate({ gigId, desc, star })
    e.target[0].value = ''
    e.target[1].value = 1
  }

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : reviews.length === 0 ? (
        <p>Be the first to leave a review</p>
      ) : (
        // All Reviews
        reviews.map((rev) => <SingleReview key={rev._id} review={rev} />)
      )}
      <div className="add-review">
        <h3>Leave a review</h3>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="textarea"
            name="desc"
            placeholder="What did you think?"
          />
          <div className='bottom'>
            <select name="star" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Reviews
