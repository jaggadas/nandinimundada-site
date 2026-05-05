import Carousel from "../../components/Carousel/Carousel.jsx";
import { site } from "../../content/site.js";
import { homeCarousel } from "../../content/carousel.js";
import "./Home.css";

const heroImage = "/background.png";

export default function Home() {
  return (
    <div className="page home">
      <section
        className="home__hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="home__hero-overlay">
          <div className="home__hero-text">
            <h1 className="home__name">{site.name}</h1>
            <p className="home__bio">{site.bio}</p>
          </div>
        </div>
      </section>

      <section className="home__carousel">
        <Carousel slides={homeCarousel} autoplay interval={5000} />
      </section>
    </div>
  );
}
