import WorkItem from "../../components/WorkItem/WorkItem.jsx";
import { workProjects } from "../../content/projects.js";
import "./Work.css";

export default function Work() {
  return (
    <div className="page work">
      <div className="work__list">
        {workProjects.map((p) => (
          <WorkItem key={p.slug} {...p} href={`#${p.slug}`} />
        ))}
      </div>
    </div>
  );
}
