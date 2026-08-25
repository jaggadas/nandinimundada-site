import WorkItem from "../../components/WorkItem/WorkItem.jsx";
import PageHead from "../../components/PageHead/PageHead.jsx";
import { workProjects } from "../../content/projects.js";
import "./Work.css";

export default function Work() {
  return (
    <div className="page work">
      <PageHead
        title="Work."
        note={`${workProjects.length} projects — each opens a pdf`}
      />
      <div className="work__list">
        {workProjects.map((p, i) => (
          <WorkItem key={p.slug} {...p} href={p.pdf} index={i} />
        ))}
      </div>
    </div>
  );
}
