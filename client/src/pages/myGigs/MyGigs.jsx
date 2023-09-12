import './MyGigs.scss'
import { Link } from 'react-router-dom'
import getCurrentUser from '../../utils/getCurrentUser'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'

const MyGigs = () => {
  const currentUser = getCurrentUser()
  const queryClient = useQueryClient()

  const { data, isLoading, error } = useQuery({
    queryKey: ['myGigs', currentUser._id],
    queryFn: () =>
      newRequest
        .get(`/gigs/?userId=${currentUser._id}`)
        .then((res) => res.data),
  })

  const { mutate } = useMutation({
    mutationFn: (gigId) => newRequest.delete(`/gigs/${gigId}`),
    onSuccess: queryClient.refetchQueries('myGigs'),
  })

  const handleDelete = (gigId) => {
    mutate(gigId)
  }

  return (
    <div className="my-gigs">
      {isLoading ? (
        <h4>Loading...</h4>
      ) : error ? (
        <h4>Error...</h4>
      ) : (
        <div className="container">
          <div className="title">
            <h1>Gigs</h1>
            <Link to="/add">
              <button>Add New Gig</button>
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Sales</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.gigs.map((gig) => {
                return (
                  <tr key={gig._id}>
                    <td>
                      <img className="job-image" src={gig.cover} alt="" />
                    </td>
                    <td>{gig.title}</td>
                    <td>Price</td>
                    <td>A${gig.price}</td>
                    <td>
                      <img
                        className="delete"
                        src="/img/delete.png"
                        alt=""
                        onClick={() => handleDelete(gig._id)}
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default MyGigs
