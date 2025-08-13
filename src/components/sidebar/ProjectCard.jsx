import { useNavigate } from "react-router-dom";

const ProjectCard = ({ title, image, slug }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${slug}`)}
      className="cursor-pointer rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 hover:shadow-lg bg-white w-full max-w-md mx-auto"
    >
      <div className="w-full h-64">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <div className="h-[2px] bg-gray-100 w-16 mb-1" />
      </div>
    </div>
  );
};

export default ProjectCard;
