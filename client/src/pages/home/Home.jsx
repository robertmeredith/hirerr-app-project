import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import { cards, projects } from '../../data'
import './Home.scss'
import CategoryCard from '../../components/categoryCard/CategoryCard'
import ProjectCard from '../../components/projectCard/ProjectCard'

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <div className="areas">
        <Slide slidesToShow={5} arrowsScroll={3}>
          {cards.map((card) => (
            <CategoryCard key={card.id} item={card} />
          ))}
        </Slide>
      </div>

      {/* FEATURES SECTION */}
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <div>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Stick to your budget
              </div>
              <p>
                Find the right service for every price point. No hourly rates,
                just project-based pricing.
              </p>
            </div>
            <div>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Get quality work done quickly
              </div>
              <p>
                Hand your project over to a talented freelancer in minutes, get
                long-lasting results.
              </p>
            </div>
            <div>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Pay when you're happy
              </div>
              <p>
                Upfront quotes mean no surprises. Payments only get released
                when you approve.
              </p>
            </div>
            <div>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Count on 24/7 support
              </div>
              <p>
                Our round-the-clock support team is available to help anytime,
                anywhere.
              </p>
            </div>
          </div>
          <div className="item">
            <video src="" controls></video>
          </div>
        </div>
      </div>

      {/* BUSINESS SOLUTIONS SECTION */}
      <div className="features business">
        <div className="container">
          {/* Item */}
          <div className="item">
            <h1>hirerr Business Solutions</h1>
            <h1>Advanced solutions and professional talent for businesses</h1>
            <div>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Hirerr Pro
              </div>
              <p>
                Access top freelancers and professional business tools for any
                project
              </p>
            </div>
            <div>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Hirerr Certified
              </div>
              <p>Build your own branded marketplace of certified experts</p>
            </div>
            <div>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Hirerr Enterprise
              </div>
              <p>
                Manage your freelance workforce and onboard additional talent
                with an end-to-end SaaS solution
              </p>
            </div>
            <button>Learn more</button>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_585,dpr_2.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png"></img>
          </div>
        </div>
      </div>

      {/* SECOND SLIDER */}
      <div className="inspiring-work">
        <div
          className="container
        "
        >
          <h1>Inspiring work made on Hirerr</h1>
          <Slide slidesToShow={4} arrowsScroll={3}>
            {projects.map((card) => (
              <ProjectCard item={card} key={card.id} />
            ))}
          </Slide>
        </div>
      </div>
    </div>
  )
}

export default Home
