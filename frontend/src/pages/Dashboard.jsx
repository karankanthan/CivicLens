import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/complaints", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(res => setComplaints(res.data));
  }, []);

  const updateStatus = async (id, status) => {
    await axios.put(
      `http://localhost:5000/api/complaints/${id}`,
      { status, authorityResponse: "Inspection completed" },
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
    window.location.reload();
  };

  return (
    <div className="container">
      <h2>Authority Dashboard</h2>

      {complaints.map(c => (
        <div key={c._id} className="card">
          <p><b>Category:</b> {c.category}</p>
          <p><b>Location:</b> {c.location}</p>
          <p><b>Status:</b> {c.status}</p>

          <img
            src={`http://localhost:5000/uploads/${c.image}`}
            alt="evidence"
            width="250"
          />

          <div>
            <button onClick={() => updateStatus(c._id, "Pending")}>
              Mark Pending
            </button>

            <button onClick={() => updateStatus(c._id, "Action Taken")}>
              Action Takenimport { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/complaints", {
      headers: { Authorization: localStorage.getItem("token") }
    }).then(res => setData(res.data));
  }, []);

  return (
    <div className="dashboard">
      <h2>Authority Dashboard</h2>
      {data.map(c => (
        <div key={c._id} className="card">
          <h3>{c.category}</h3>
          <p>{c.location}</p>
          <p>Status: {c.status}</p>
          <img src={`http://localhost:5000/uploads/${c.image}`} width="250"/>
        </div>
      ))}
    </div>
  );
}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}