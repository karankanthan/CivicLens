import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    axios.get("https://civiclens-oo9v.onrender.com/api/complaints", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(res => setComplaints(res.data));
  }, []);

  const updateStatus = async (id, status) => {
    await axios.put(
      `https://civiclens-oo9v.onrender.com/api/complaints/${id}`,
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
    <div className="dashboard">
      <h2>Authority Dashboard</h2>

      {complaints.map(c => (
        <div key={c._id} className="card">
          <p><b>Category:</b> {c.category}</p>
          <p><b>Location:</b> {c.location}</p>
          <p><b>Status:</b> {c.status}</p>

          <img
            src={`https://civiclens-oo9v.onrender.com/uploads/${c.image}`}
            alt="evidence"
            width="250"
          />

          <div className="actions">
            <button onClick={() => updateStatus(c._id, "Pending")}>
              Mark Pending
            </button>

            <button onClick={() => updateStatus(c._id, "Action Taken")}>
              Action Taken
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}