import './Message.scss'
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link className="link" to="/messages">
            MESSAGES
          </Link>{' '}
          {'>'} JOHN DOE
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5595c6f8246dae65aba5ab4893d80bc7-1686643600531/2f6e856a-7ec8-43e9-b2f2-ded4cd6c1a18.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              maxime eos incidunt vero! Aliquid eos aut vitae ipsum voluptatem
              magni ut, ex alias earum! At esse vitae magnam hic beatae sunt
              doloribus, officia neque consequatur iure dolorem, pariatur quam
              corporis?
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5595c6f8246dae65aba5ab4893d80bc7-1686643600531/2f6e856a-7ec8-43e9-b2f2-ded4cd6c1a18.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              maxime eos incidunt vero! Aliquid eos aut vitae ipsum voluptatem
              magni ut, ex alias earum! At esse vitae magnam hic beatae sunt
              doloribus, officia neque consequatur iure dolorem, pariatur quam
              corporis?
            </p>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5595c6f8246dae65aba5ab4893d80bc7-1686643600531/2f6e856a-7ec8-43e9-b2f2-ded4cd6c1a18.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              maxime eos incidunt vero! Aliquid eos aut vitae ipsum voluptatem
              magni ut, ex alias earum! At esse vitae magnam hic beatae sunt
              doloribus, officia neque consequatur iure dolorem, pariatur quam
              corporis?
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5595c6f8246dae65aba5ab4893d80bc7-1686643600531/2f6e856a-7ec8-43e9-b2f2-ded4cd6c1a18.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              maxime eos incidunt vero! Aliquid eos aut vitae ipsum voluptatem
              magni ut, ex alias earum! At esse vitae magnam hic beatae sunt
              doloribus, officia neque consequatur iure dolorem, pariatur quam
              corporis?
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message
