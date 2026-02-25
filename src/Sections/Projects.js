import { useEffect, useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { apiLink } from "../App";
export default function Projects({ dashboard }) {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios.get(`${apiLink}/projects`);
        setProjects(res.data.projects.sort((a, b) => a.order - b.order));
      } catch (error) {
        console.error(error);
      }
    };
    getProjects();
  }, []);

  const goToCreate = () => {
    navigate("create-project");
  };
  return (
    <div id="projects" className="bg-secondary p-4">
      <h2 className="section-heading text-white">Projects</h2>
      <div className="container">
        {dashboard && (
          <Button onClick={goToCreate} className="fs-5 p-3 m-auto mb-4 mt-3">
            Create A New Project Card
          </Button>
        )}
        <div className="row">
          {projects.map((p) => (
            <ProjectCard key={p._id} project={p} dashboard={dashboard} />
          ))}
        </div>
      </div>
    </div>
  );
}
