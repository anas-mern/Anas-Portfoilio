import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { apiLink } from "../App";
export default function Admin() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const getAdmin = async () => {
      try {
        const res = await axios.get(`${apiLink}/admin`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAdmin(res.data.admin);
      } catch (error) {
        console.error(error);
      }
    };
    getAdmin();
  }, [token]);

  const goToEdit = () => {
    navigate(`edit-admin/${admin._id}`);
  };
  return (
    <div id="admin" className="bg-black p-4">
      <h2 className="section-heading text-white">Admin</h2>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <Card className="col-4 bg-secondary text-black">
            <Card.Header>The One And The Only Admin</Card.Header>
            <Card.Body>
              <p>Username: {admin.username}</p>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="primary"
                onClick={goToEdit}
              >
                Edit The Admin
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
}
