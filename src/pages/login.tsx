import { useNavigate } from "react-router";
import { login } from "../util/permission";
import { useState } from "react";
import { jwtDecode } from 'jwt-decode';

type DecodedToken = {
  role: string;
};

export default function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function log(e: React.FormEvent) {
    e.preventDefault();
    const token = await login({ username: userName, password });
    if (token) {
      const decoded: DecodedToken = jwtDecode(token);
      if (decoded.role === 'user') {
        navigate("/user");
      } else if (decoded.role === 'admin') {
        navigate("/admin");
      }
    } else {
      alert("Login failed");
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={log}>
        <input
          type="text"
          placeholder="enter name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>

      <button onClick={() => navigate("/admin")}>admin</button>
      <button onClick={() => navigate("/user")}>user</button>
    </>
  );
}
