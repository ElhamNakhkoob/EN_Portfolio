import { useNavigate } from "react-router-dom";

const ProjectCard = ({ title, image, slug }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${slug}`)}
      className="cursor-pointer rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl bg-white"
    >      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default ProjectCard;
