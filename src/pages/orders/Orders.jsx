import './Orders.scss'
import { Link } from 'react-router-dom'

const Orders = () => {
  const currentUser = {
    id: 1,
    username: 'John Doe',
    isSeller: true,
  }

  return (
    <div className="my-orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
          <Link to="/add"></Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? 'Buyer' : 'Seller'}</th>
            <th>Contact</th>
          </tr>
          {/* SINGLE GIG */}
          <tr>
            <td>
              <img
                className="job-image"
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments-dev/generic_asset/asset/3f5acca5c1fd134afc797b2d5ccb9bfb-1677664874738/Animation.jpg"
                alt=""
              />
            </td>
            <td>Logo Design</td>
            <td>A$80</td>
            <td>Alan Jenkins</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
          {/* SINGLE Order */}
          <tr>
            <td>
              <img
                className="job-image"
                src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs3/294959337/original/f716620b3e1bfe52b3b398f218d6bbc23d7a950a.jpg"
                alt=""
              />
            </td>
            <td>Video Editing</td>
            <td>A$450</td>
            <td>Todd Anderson</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
          {/* SINGLE Order */}
          <tr>
            <td>
              <img
                className="job-image"
                src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/194009784/original/5d2ce9be504e32084e203aaf20151469c65107b3.jpg"
                alt=""
              />
            </td>
            <td>Graphic Generation</td>
            <td>A$120</td>
            <td>Cosmin Ganea</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
          {/* SINGLE Order */}
          <tr>
            <td>
              <img
                className="job-image"
                src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/289649372/original/48372cb9e5e2d506ea5a81976cfa12c6108af11a.jpg"
                alt=""
              />
            </td>
            <td>SEO</td>
            <td>A$500</td>
            <td>Ravi Pathirana</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
          {/* SINGLE Order */}
          <tr>
            <td>
              <img
                className="job-image"
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3baf91d2ca0c49f0973f2f9e3e210f86-1682409420385/Website%20Development.png"
                alt=""
              />
            </td>
            <td>Web Design</td>
            <td>A$800</td>
            <td>Shavii</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
          {/* SINGLE Order */}
          <tr>
            <td>
              <img
                className="job-image"
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/529ea44f10a2aff520b99859d285b968-1682409451031/Application%20Development.png"
                alt=""
              />
            </td>
            <td>Image Editing</td>
            <td>A$160</td>
            <td>Ramlala M</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
          {/* SINGLE Order */}
          <tr>
            <td>
              <img
                className="job-image"
                src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/23197467/original/d4f9121d0d962301e3ef52c1a5217bf003889e2a.jpg"
                alt=""
              />
            </td>
            <td>3D Model</td>
            <td>A$60</td>
            <td>Sunny</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders
