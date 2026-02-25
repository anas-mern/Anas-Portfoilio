import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { apiLink } from "../App";
export default function ProjectCard({ project, dashboard }) {
  function navigateToProject() {
    window.open(project.url);
  }
  const navigate = useNavigate();
  function navigateToEditProject(params) {
    navigate(`edit-project/${project._id}`);
  }
  const token = localStorage.getItem("token");
  const deleteProject = async () => {
    console.log(project._id);
    try {
      await axios.delete(
        `${apiLink}/${project._id}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="col-md-6 col-sm-6 col-12 mb-4">
      <Card className="bg-black text-white project-card position-relative pointer-event">
        <div className="d-flex">
          <Card.Img
            onClick={navigateToProject}
            style={{ width: "200px" }}
            src={project.image}
          />
          <div className="d-flex flex-column">
            <Card.Header onClick={navigateToProject} className="fs-4">
              {project.title}
            </Card.Header>
            <Card.Body onClick={navigateToProject}>
              {project.description}
            </Card.Body>
          </div>
        </div>
        <Card.Footer
          onClick={navigateToProject}
          className="d-flex gap-2 justify-content-center border-1 border-top border-secondary"
        >
          {project.skills.map((s) => (
            <span key={s} className="text-success" style={{ fontSize: "13px" }}>
              {s}
            </span>
          ))}
        </Card.Footer>
        {dashboard && (
          <Card.Footer className="d-flex gap-2 justify-content-center border-1 border-top border-secondary">
            <Button onClick={navigateToEditProject}>
              Edit <FontAwesomeIcon icon={faEdit} />
            </Button>
            <Button variant="danger" onClick={deleteProject}>
              Delete <FontAwesomeIcon icon={faTrash} />
            </Button>
          </Card.Footer>
        )}
      </Card>
    </div>
  );
}
