import AdminForm from "../Components/AdminForm";
import ProjectForm from "../Components/ProjectForm";

export default function EditPage({ type }) {
  return type === "project" ? (
    <ProjectForm type={"Edit"} />
  ) : (
    <AdminForm type={"Edit"} />
  );
}
