import { Link, useLocation } from 'react-router-dom'
import './Navbar.scss'
import { useEffect, useState } from 'react'
import newRequest from '../../utils/newRequest'
import { useNavigate } from 'react-router-dom'
import getCurrentUser from '../../utils/getCurrentUser'

const GIGS_BASE_PATH = '/gigs'

const subMenuCategories = [
  { text: 'Web Design', category: 'web-design' },
  { text: 'Video & Animation', category: 'video-animation' },
  { text: 'Writing & Translation', category: 'writing-translation' },
  { text: 'AI Services', category: 'ai-services' },
  { text: 'Digital Marketing', category: 'digital-marketing' },
  { text: 'Music & Audio', category: 'music-audio' },
]

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const { pathname } = useLocation()

  // changes state of active based on scroll size
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  // Useeffect to control sticky nav
  useEffect(() => {
    window.addEventListener('scroll', isActive)
    // clean up function
    return () => {
      window.removeEventListener('scroll', isActive)
    }
  }, [])

  // LOGOUT
  const handleLogout = async () => {
    try {
      await newRequest.post('/auth/logout')
      localStorage.setItem('currentUser', null)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const currentUser = getCurrentUser()

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">hirerr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        {/* Navbar Links */}
        <div className="links">
          <span>Business Solutions</span>
          <Link to="/gigs?cat=all" className="link">
            Explore
          </Link>
          <span>English</span>
          {!currentUser && (
            <Link to="/login" className="link">
              Sign in
            </Link>
          )}
          {/* Conditional Nav Options */}
          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser && (
            <Link to="/register">
              <button className={active || pathname !== '/' ? 'active' : ''}>
                Join
              </button>
            </Link>
          )}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              {currentUser?.username}
              <img src={currentUser.img || '/img/noavatar.jpg'} alt="" />
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== '/') && (
        <>
          <hr />
          {/* Menu */}
          <div className="menu">
            {subMenuCategories.map((item) => (
              <Link
                key={item.text}
                to={`${GIGS_BASE_PATH}?cat=${item.category}`}
                className="link"
              >
                {item.text}
              </Link>
            ))}
          </div>
          <hr />
        </>
      )}
      {/* Divider */}
    </div>
  )
}

export default Navbar
