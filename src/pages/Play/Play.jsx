import StaggeredGrid from "../../components/StaggeredGrid/StaggeredGrid.jsx";
import { playBlocks } from "../../content/playBlocks.js";
import "./Play.css";

export default function Play() {
  return (
    <div className="page play">
      <div className="container play__grid">
        <StaggeredGrid blocks={playBlocks} />
      </div>
    </div>
  );
}
