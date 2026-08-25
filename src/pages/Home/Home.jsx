import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel.jsx";
import { site } from "../../content/site.js";
import { homeCarousel } from "../../content/carousel.js";
import "./Home.css";

const heroImage = "/background.png";

// Letter-by-letter slide-up reveal for the name.
function AnimatedLine({ text, startDelay = 0 }) {
  return (
    <span className="home__line" aria-hidden="true">
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="home__letter"
          style={{ animationDelay: `${startDelay + i * 45}ms` }}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  const [first, last] = site.name.split(" ");
  return (
    <div className="page home">
      <section className="home__poster">
        <img
          className="home__poster-img"
          src={heroImage}
          alt="Self-portrait illustration"
        />

        <div className="container home__overlay">
          <div className="home__title-block">
            <p className="home__hello">Hello, I&rsquo;m</p>
            <h1 className="home__name">
              <span className="home__sr">{site.name}</span>
              <AnimatedLine text={first} startDelay={200} />
              <AnimatedLine text={last} startDelay={550} />
            </h1>
            <p className="home__tags">
              {site.roles.map((r) => (
                <span key={r}>[ {r} ]</span>
              ))}
            </p>
            <p className="home__bio">{site.bio}</p>
          </div>
        </div>
      </section>

      <section className="home__carousel">
        <p className="eyebrow home__carousel-label">
          [ selected work — click a page to open the pdf ]
        </p>
        <Carousel slides={homeCarousel} autoplay interval={5000} />
      </section>

      <Link to="/contact" className="home__cta">
        <span className="home__cta-title">
          Have an idea? Let&rsquo;s talk
          <span className="home__cta-arrow">→</span>
        </span>
      </Link>
    </div>
  );
}
