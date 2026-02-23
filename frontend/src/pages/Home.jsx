import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Home.css";

export default function Home() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/complaints/public")
      .then(res => setIssues(res.data));
  }, []);

  return (
    <div className="home">
      <h1>Welcome to CivicLens</h1>
      <p>Transparency through citizen reporting</p>

      <div className="issue-grid">
        {issues.map((i, index) => (
          <div key={index} className="card">
            <h3>{i.category}</h3>
            <p>{i.location}</p>
            <span className={`status ${i.status === "Action Taken" ? "done" : "pending"}`}>
              {i.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}