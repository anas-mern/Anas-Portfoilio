import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { apiLink } from "../App";

export default function AdminForm({ type }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [usernameErrMsg, setUsernameErrMsg] = useState("");
  const [passErrMsg, setPassErrMsg] = useState("");
  const submit = async (e) => {
    e.preventDefault();

    setUsernameErrMsg("");
    setPassErrMsg("");

    try {
      const body = { username, password };
      if (type === "Login") {
        const res = await axios.post(
          `${apiLink}/admin/login`,
          body,
        );
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      } else {
        const token = localStorage.getItem("token");
        const id = window.location.href.split("/")[5];
        await axios.patch(
          `${apiLink}/${id}`,
          body,
          { headers: { Authorization: `Bearer ${token}` } },
        );
      }
      navigate("/dashboard");
    } catch (error) {
      const msg = error?.response?.data?.msg || "Something went wrong";
      if (msg.toLowerCase().includes("username")) {
        setUsernameErrMsg(msg);
      } else if (msg.toLowerCase().includes("password")) {
        setPassErrMsg(msg);
      } else {
        // Fallback error
        alert(msg);
      }
    }
  };
  useEffect(() => {
    if (type === "Edit") {
      const getAdmin = async () => {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${apiLink}/admin/`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsername(res.data.admin.username);
        setPassword(res.data.admin.password);
      };
      getAdmin();
    }
  }, [type]);

  return (
    <div className="fullscreen-center bg-secondary">
      <div className="soft-shadow w-50 bg-black text-white">
        <h1 className="text-center mb-4">{type}</h1>
        <Form onSubmit={submit}>
          <Form.Group className="d-flex gap-3 align-items-center mb-3">
            <Form.Label className="w-35">UserName</Form.Label>
            <Form.Control
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <p className="text-danger p-1">{usernameErrMsg}</p>
          <Form.Group className="d-flex gap-3 align-items-center mb-3">
            <Form.Label className="w-35">Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <p className="text-danger p-1">{passErrMsg}</p>
          <Button variant="primary" type="submit">
            {type}
          </Button>
        </Form>
      </div>
    </div>
  );
}
