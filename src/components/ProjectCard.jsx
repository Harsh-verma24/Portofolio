export default function ProjectCard({ title, desc, link }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition flex flex-col items-center">
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 mb-4 text-center">{desc}</p>
      <a href={link} target="_blank" rel="noreferrer" className="text-teal-600 hover:underline font-semibold">
        View Project →
      </a>
    </div>
  );
}
