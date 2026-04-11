import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero.jsx";

export default function NotFound() {
  return (
    <div className="page">
      <Hero
        eyebrow="404"
        title="Page not found"
        subtitle="The page you were looking for doesn't exist (yet)."
      >
        <p>
          <Link to="/">← Back home</Link>
        </p>
      </Hero>
    </div>
  );
}
