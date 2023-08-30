import './MyGigs.scss'
import { Link } from 'react-router-dom'

const MyGigs = () => {
  return (
    <div className="my-gigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          {/* SINGLE GIG */}
          <tr>
            <td>
              <img
                className="job-image"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cde7c9a099037ecd7e6f7176cf507722-1687343037/Business%20Card%20Mockup%20A1/do-minimalist-logo-design.jpg"
                alt=""
              />
            </td>
            <td>Gig 1</td>
            <td>Price</td>
            <td>450</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
          {/* SINGLE GIG */}
          <tr>
            <td>
              <img
                className="job-image"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cde7c9a099037ecd7e6f7176cf507722-1687343037/Business%20Card%20Mockup%20A1/do-minimalist-logo-design.jpg"
                alt=""
              />
            </td>
            <td>Gig 2</td>
            <td>Price</td>
            <td>450</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
          {/* SINGLE GIG */}
          <tr>
            <td>
              <img
                className="job-image"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cde7c9a099037ecd7e6f7176cf507722-1687343037/Business%20Card%20Mockup%20A1/do-minimalist-logo-design.jpg"
                alt=""
              />
            </td>
            <td>Gig 3</td>
            <td>Price</td>
            <td>450</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
          {/* SINGLE GIG */}
          <tr>
            <td>
              <img
                className="job-image"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cde7c9a099037ecd7e6f7176cf507722-1687343037/Business%20Card%20Mockup%20A1/do-minimalist-logo-design.jpg"
                alt=""
              />
            </td>
            <td>Gig 4</td>
            <td>Price</td>
            <td>450</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
          {/* SINGLE GIG */}
          <tr>
            <td>
              <img
                className="job-image"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cde7c9a099037ecd7e6f7176cf507722-1687343037/Business%20Card%20Mockup%20A1/do-minimalist-logo-design.jpg"
                alt=""
              />
            </td>
            <td>Gig 5</td>
            <td>Price</td>
            <td>450</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
          {/* SINGLE GIG */}
          <tr>
            <td>
              <img
                className="job-image"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cde7c9a099037ecd7e6f7176cf507722-1687343037/Business%20Card%20Mockup%20A1/do-minimalist-logo-design.jpg"
                alt=""
              />
            </td>
            <td>Gig 6</td>
            <td>Price</td>
            <td>450</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
          {/* SINGLE GIG */}
          <tr>
            <td>
              <img
                className="job-image"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cde7c9a099037ecd7e6f7176cf507722-1687343037/Business%20Card%20Mockup%20A1/do-minimalist-logo-design.jpg"
                alt=""
              />
            </td>
            <td>Gig 7</td>
            <td>Price</td>
            <td>450</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs
