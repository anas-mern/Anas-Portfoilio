import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardPage from "./Pages/DashboardPage";
import LoginPage from "./Pages/LoginPage";
import EditPage from "./Pages/EditPage";
import CreatePage from "./Pages/CreatePage";
function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<ProtectedRoute />} path="/dashboard">
        <Route element={<DashboardPage />} path="" />
        <Route element={<EditPage type="project" />} path="edit-project/:id" />
        <Route element={<CreatePage />} path="create-project" />
        <Route element={<EditPage type="admin" />} path="edit-admin/:id" />
      </Route>
    </Routes>
  );
}

export default App;
export const apiLink = "https://portfolio-backend-8zuc.onrender.com/api/v1"
