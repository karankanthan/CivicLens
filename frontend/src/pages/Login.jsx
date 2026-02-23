import { useState } from "react";
import axios from "axios";
import "../styles/Login.css";

export default function Login() {
  const [form, setForm] = useState({});

  const login = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", form);
    localStorage.setItem("token", res.data.token);
    window.location = "/dashboard";
  };

  return (
    <div className="login card">
      <h2>Authority Login</h2>
      <input placeholder="Username" onChange={e => setForm({...form, username:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password:e.target.value})}/>
      <button onClick={login}>Login</button>
    </div>
  );
}