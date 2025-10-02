
import ProjectCard from "../components/ProjectCard";
import { portfolioData } from "../data";

export default function Projects() {
  const projects = portfolioData.projects;

  return (
    <div className="p-8 fade-in">
  <h2 className="text-3xl font-bold mb-6 text-center accent-heading">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div className="card-hover">
            <ProjectCard key={i} title={p.title} desc={p.description} link={p.link} />
          </div>
        ))}
      </div>
    </div>
  );
}
