import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import "./ProjectGrid.css";

export default function ProjectGrid({ items = [], columns = 3 }) {
  return (
    <div className={`grid grid--cols-${columns}`}>
      {items.map((item) => (
        <ProjectCard key={item.slug} {...item} href={`#${item.slug}`} />
      ))}
    </div>
  );
}
