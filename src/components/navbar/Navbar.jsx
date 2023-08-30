import { Link, useLocation } from 'react-router-dom'
import './Navbar.scss'
import { useEffect, useState } from 'react'


const subMenu = [
  {text: 'Video & Animation', path: '/'},
  {text: 'Writing & Translation', path: '/'},
  {text: 'AI Services', path: '/'},
  {text: 'Digital Marketing', path: '/'},
  {text: 'Music & Audio', path: '/'},
]

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)


const {pathname} = useLocation()

  // changes state of active based on scroll size
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', isActive)
    // clean up function
    return () => {
      window.removeEventListener('scroll', isActive)
    }
  }, [])

  const currentUser = {
    id: 1,
    username: 'John Doe',
    isSeller: true,
  }

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="logo">
          <Link to="/" className='link'>
          <span className="text">hirerr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        {/* Navbar Links */}
        <div className="links">
          <span>Business Solutions</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {/* Conditional Nav Options */}
          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser && <button className="">Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              {currentUser?.username}
              <img
                src="https://yt3.ggpht.com/ytc/AOPolaToAOoB7zZaRe9kVmXGi6QWBBPrESpK8pcaWnBL=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser?.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">Gigs</Link>
                    <Link className="link" to="/add">Add New Gig</Link>
                  </>
                )}
                <Link className="link" to="/orders">Orders</Link>
                <Link className="link" to="/messages">Messages</Link>
                <Link className="link" to="/">Logout</Link>
              </div>}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== '/') && (
        <>
          <hr />
          {/* Menu */}
          <div className="menu">
            {subMenu.map((item) => (
              <Link key={item} to={item.path} className='link'>{item.text}</Link>
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
