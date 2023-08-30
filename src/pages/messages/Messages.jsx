import './Messages.scss'
import { Link } from 'react-router-dom'

const Messages = () => {
  const message =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a perspiciatis aspernatur cumque! Repellendus, facilis sunt minus doloribus voluptates odit quis! Tenetur ducimus maxime itaque possimus facere sint perspiciatis! Dolorum, facilis quaerat iste voluptas recusandae vitae, aspernatur numquam, corrupti earum iure itaque laboriosam. Autem non asperiores assumenda. Ea tempore illo cum tenetur fugit, a ullam, velit molestiae quia quo, iste quisquam quae. Vitae inventore blanditiis, eius nihil corrupti soluta eligendi dolore nulla ab sed reprehenderit ducimus facere! Molestias reiciendis minus mollitia, soluta sit, corporis quos modi maxime explicabo dolores impedit dignissimos nemo iste qui dicta odio est repellat rerum perferendis'

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
          <Link to="/add"></Link>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          {/* SINGLE GIG */}
          <tr className="active">
            <td>Alan Jenkins</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          {/* SINGLE Order */}
          <tr className="active">
            <td>Todd Anderson</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          {/* SINGLE Order */}
          <tr>
            <td>Cosmin Ganea</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
          {/* SINGLE Order */}
          <tr>
            <td>Ravi Pathirana</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td></td>
          </tr>
          {/* SINGLE Order */}
          <tr>
            <td>Shavii</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td></td>
          </tr>
          {/* SINGLE Order */}
          <tr>
            <td>Ramlala M</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td></td>
          </tr>
          {/* SINGLE Order */}
          <tr>
            <td>Sunny</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages
