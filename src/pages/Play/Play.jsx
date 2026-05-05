import PlayGroup from "../../components/PlayGroup/PlayGroup.jsx";
import { playGroups } from "../../content/playGroups.js";
import "./Play.css";

export default function Play() {
  return (
    <div className="page play">
      <div className="container play__inner">
        {playGroups.map((group) => (
          <PlayGroup key={group.id} {...group} />
        ))}
      </div>
    </div>
  );
}
