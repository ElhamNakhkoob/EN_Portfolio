import { useNavigate } from "react-router-dom";

const ProjectCard = ({ title, image, slug }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${slug}`)}
      className="cursor-pointer rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 hover:shadow-lg bg-white max-w-sm mx-auto"
    >
      <img src={image} alt={title} className="w-full h-70 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default ProjectCard;
