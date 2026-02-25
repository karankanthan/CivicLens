import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Home.css";

export default function Home() {
  const [issues, setIssues] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get("https://civiclens-oo9v.onrender.com/api/complaints/public")
      .then(res => setIssues(res.data));
  }, []);

  return (
    <div className="home">

      {/* Hero */}
      <h1>Welcome to CivicLens</h1>
      <p className="hero-text">
        Report, Track, Resolve – CivicLens, for a transparent tomorrow.
      </p>

      {/* Issues */}
      <div className="issue-grid">
        {issues.map((i, index) => (
          <div
            key={index}
            className="card issue-card"
            onClick={() => setSelected(i)}
          >
            <h3>{i.category}</h3>
            <p>{i.location}</p>
            <span className={`status ${i.status === "Action Taken" ? "done" : "pending"}`}>
              {i.status}
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal">
            <h3>{selected.category}</h3>
            <p><b>Location:</b> {selected.location}</p>
            <p><b>Description:</b> {selected.description}</p>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}