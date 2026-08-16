import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { apiLink } from "../App";

export default function ProjectForm({ type }) {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    image: null,
    order: 1,
    url: "",
    skills: [],
  });
  const [oldImage, setOldImage] = useState("");

  const formFields = [
    { name: "Title", type: "text", as: "input" },
    { name: "Description", type: "text", as: "textarea" },
    { name: "URL", type: "text", as: "input" },
    { name: "Order", type: "text", as: "input" },
  ];
  const options = [
    "HTML",
    "CSS",
    "Js",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
  ];
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setProjectData((prev) => ({ ...prev, skills: [...prev.skills, value] }));
    } else {
      setProjectData((prev) => ({
        ...prev,
        skills: prev.skills.filter((skill) => skill !== value),
      }));
    }
  };
  const [imagePreview, setImagePreview] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProjectData((prev) => ({
      ...prev,
      [e.target.name]: file,
    }));
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  //Submit Func
  const submit = async (e) => {
    e.preventDefault();
    setErrMsg("");
    try {
      const formData = new FormData();
      for (const key in projectData) {
        if (
          !["_id", "createdAt", "updatedAt", "__v"].includes(key) &&
          projectData[key] !== oldImage
        ) {
          if (key === "skills") {
            formData.append(key, JSON.stringify(projectData[key]));
          } else {
            formData.append(key, projectData[key]);
          }
        }
      }
      if (type === "Create") {
        await axios.post(`${apiLink}/projects`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        const id = window.location.href.split("/")[6];
        await axios.patch(`${apiLink}/projects/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      navigate("/dashboard");
    } catch (error) {
      const msg = error?.response?.data?.msg || "Something went wrong";
      setErrMsg(msg);
    }
  };

  useEffect(() => {
    if (type === "Edit") {
      const getProject = async () => {
        const id = window.location.href.split("/")[6];
        console.log(id);
        const res = await axios.get(`${apiLink}/projects/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOldImage(res.data.project.image);
        setImagePreview(res.data.project.image);
        setProjectData(res.data.project);
      };
      getProject();
    }
  }, [type, token]);
  return (
    <div className="fullscreen-center bg-secondary">
      <div className="soft-shadow w-50 bg-black text-white">
        <h1 className="text-center mb-4"> {type} The Project</h1>
        <Form onSubmit={submit}>
          {formFields.map((f) => (
            <Form.Group className="d-flex gap-3 align-items-center mb-3">
              <Form.Label className="w-35">{f.name}</Form.Label>
              <Form.Control
                name={f.name.toLowerCase()}
                type={f.type}
                value={projectData[f.name.toLowerCase()]}
                as={f.as}
                required
                onChange={(e) =>
                  setProjectData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              ></Form.Control>
            </Form.Group>
          ))}
          <Form.Group className="mb-3">
            <Form.Label>Choose The Skills Featured In The Project</Form.Label>
            <div className="d-flex gap-3 flex-wrap">
              {options.map((option, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  checked={projectData.skills.includes(option)}
                  label={option}
                  value={option}
                  onChange={handleCheckboxChange}
                />
              ))}
            </div>
          </Form.Group>
          <Form.Group className="d-flex gap-3 align-items-center mb-3">
            <Form.Label className="w-35">Image</Form.Label>
            <Form.Control
              name="image"
              type="file"
              id="image-inp"
              onChange={(e) => handleImageChange(e)}
            />
            <img
              src={imagePreview}
              alt="Project"
              className="project-img rounded"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {type}
          </Button>
          <p className="text-danger p-1">{errMsg}</p>
        </Form>
      </div>
    </div>
  );
}
