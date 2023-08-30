import './Gig.scss'
import { Slider } from 'infinite-react-carousel'

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">HIRERR {'>'} LOGO DESIGN</span>
          <h1>I will do clean modern minimalist business logo design</h1>
          <div className="user">
            <img
              className="profile-image"
              src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/05e755891f710539727c405bf8a35ba8-1688588071795/aa5d02e0-c063-4f84-babf-b5da7a59837e.jpeg"
              alt=""
            />
            <span>Hadshon</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/321586000/original/b8a507b7b9e063a6c675991cdb6887d0a0d2c27f/do-clean-modern-minimalist-business-logo-design.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/321586000/original/e83e52668a8987c106040d8143a1899cd5f5c5b4/do-clean-modern-minimalist-business-logo-design.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230609/4_bagz8f.jpg"
              alt=""
            />
          </Slider>
          <h2>About this gig</h2>
          <p>
            What you can expect from my service: Custom logo design concepts
            tailored to your brand's identity and style Unlimited revisions
            until you're 100% satisfied with the final design High-quality files
            in various formats (JPEG, PNG, AI, PDF, etc.) Copyright ownership
            and source files provided Fast delivery and prompt communication
            throughout the process 100% customer satisfaction and a commitment
            to delivering exceptional service Attention to detail to ensure
            accuracy in representing your brand's identity Affordable pricing to
            fit any budget Let's work together to create a logo that captures
            the essence of your brand and sets you apart from the competition.
            Place your order now and let's get started on building a strong and
            memorable brand identity for your business.
          </p>

          {/* SELLER SECTION */}
          <div className="seller">
            <h2>About the seller</h2>
            <div>
              <div className="user">
                <img
                  src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/05e755891f710539727c405bf8a35ba8-1688588071795/aa5d02e0-c063-4f84-babf-b5da7a59837e.jpeg"
                  alt=""
                />

                <div className="info">
                  <span className="name">Hadshon</span>
                  <span>Minimalist designs that make a lasting impact</span>
                  <div className="stars">
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <span>5</span>
                  </div>
                </div>
                <button>Contact me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Sri Lanka</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">1 hour</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Apr 2021</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">about 1 hour</span>
                </div>
              </div>
              <hr />
              <p>
                Experienced in crafting captivating minimalist logos that leave
                a lasting impression. I bring your brand's story to life with
                clean, sleek designs that resonate with your audience.
                Collaborative and dedicated, I listen to your vision and deliver
                exceptional results. Let's create something extraordinary
                together. Explore my portfolio and let's make your brand shine!
              </p>
            </div>
          </div>
          {/* REVIEWS SECTION */}
          <div className="reviews">
            <h2>Reviews</h2>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="profile-image"
                  src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/6eac0adad8586c2d46b7fcf4a5f0d227-1671025218902/9fe6d9ab-6d6a-4199-9934-b9d1675d709d.jpg"
                  alt=""
                />
                <div className="info">
                  <span>Shane A</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png"
                      alt=""
                    />
                    <span>Canada</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I gave a very vague description of a possible logo for my
                website, and they absolutely delivered and exceeded
                expectations. I wasn't expecting something so nice from a first
                draft! No revisions are needed. Would recommend and do business
                again. Thanks!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="profile-image"
                  src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5f51f3fb29a56b4a4f692ae6b900bacf-1579009817378/e657cbc7-93e6-4869-a7c5-694251cd559e.JPG"
                  alt=""
                />
                <div className="info">
                  <span>taufikusuma</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Quick response and quick revisions, did a great job with putting
                my ideas into a logo that looked fantastic for my mom who is
                wanting to start a business selling products. Would highly
                recommend to others who need work done.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="profile-image"
                  src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/505cad63a9a60b5e7f007f0f70b70320-1652367443632/d7945300-9d2e-4919-948b-3bc02f5cc55a.jpg"
                  alt=""
                />
                <div className="info">
                  <span>Shane A</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png"
                      alt=""
                    />
                    <span>Netherlands</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Communication was fast, brief, complete. I gave an idea of what
                i wanted and Hadshon made a couple of versions and i approved
                after some adjustments. The result is very usable, including
                social media kit and everyting. Helpful?
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h2>1 Minimalist Logo Design</h2>
            <h3>A$32.65</h3>
          </div>
          <p>
            Start-up and basic logos included. Good for Social media & small
            business owners (eg: Nike logo)
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Day Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>
                3 concepts included Logo transparency Vector file Printable file
                Include 3D mockup
              </span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>3 concepts included</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Logo transparency</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Vector file</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Printable file</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Include 3D mockup</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig
