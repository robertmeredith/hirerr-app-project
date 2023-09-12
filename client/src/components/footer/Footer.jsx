const aboutCategory = [
  'Careers',
  'Press & News',
  'Partnerships',
  'Privacy Policy',
  'Terms of Service',
  'Intellectual Property Claims',
  'Investor Relations',
]

const catCategory = [
  'Graphics & Design',
  'Digital Marketing',
  'Writing & Translation',
  'Video & Animation',
  'Music & Audio',
  'Hirerr Logo Maker',
  'Programming & Tech',
  'Data',
  'Business',
  'Lifestyle',
  'Photography',
  'End-to-End Projects',
  'Sitemap',
]

const supportCategory = [
  'Help & Support',
  'Trust & Safety',
  'Selling on Hirerr',
  'Buying on Hirerr',
  'Hirerr Guides',
  'Hirerr Workspace',
  'Invoice Software',
  'Online Courses',
]

const communityCategory = [
  'Customer Success Stories',
  'Community Hub',
  'Forum',
  'Events',
  'Blog',
  'Influencers',
  'Affiliates',
  'Podcast',
  'Invite a Friend',
  'Become a Seller',
  'Community Standards',
]

const solutionsCategory = [
  'About Business Solutions',
  'Hirerr Pro',
  'Hirerr Certified',
  'Hirerr Enterprise',
  'Content Marketing',
  'Working Not Working',
  'Contact Sales',
]

import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            {catCategory.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="item">
            <h2>About</h2>
            {aboutCategory.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="item">
            <h2>Support and Education</h2>
            {supportCategory.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="item">
            <h2>Community</h2>
            {communityCategory.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="item">
            <h2>Business Solutions</h2>
            {solutionsCategory.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <hr />

        {/* BOTTOM */}
        <div className="bottom">
          <div className="left">
            <h2>hirerr</h2>
            <span>© Hirerr International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>AUD</span>
            </div>
            <div className="link">
              <img src="/img/accessibility.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
