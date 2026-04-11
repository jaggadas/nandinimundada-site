import Carousel from "../../components/Carousel/Carousel.jsx";
import { site } from "../../content/site.js";
import { homeCarousel } from "../../content/carousel.js";
import "./Home.css";

// Drop a real image into /public and set this to "/your-image.jpg"
const heroImage = null;

export default function Home() {
  return (
    <div className="page home">
      <section className="home__hero">
        <div className="container home__hero-grid">
          <div className="home__hero-text">
            <h1 className="home__name">{site.name}</h1>
            <p className="home__bio">{site.bio}</p>
          </div>

          <div className="home__hero-image">
            {heroImage ? (
              <img src={heroImage} alt="" />
            ) : (
              <div className="home__hero-placeholder">
                <span>Hero image</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="home__carousel">
        <Carousel slides={homeCarousel} autoplay interval={5000} />
      </section>
    </div>
  );
}
