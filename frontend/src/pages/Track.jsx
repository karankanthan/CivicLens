import { useState } from "react";
import axios from "axios";
import "../styles/Track.css";

export default function Track() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const track = async () => {
    try {
      // 🔹 API call
      const res = await axios.get(
        `https://civiclens-oo9v.onrender.com/api/complaints/track/${id}`
      );

      setData(res.data);

      // ✅ INSERT HERE (AFTER DATA IS SHOWN)
      setTimeout(() => {
        window.location = "/";
      }, 3000);

    } catch (err) {
      alert("Invalid Tracking ID");
    }
  };

  return (
    <div className="track card">
      <h2>Track Complaint</h2>

      <input
        placeholder="Tracking ID"
        onChange={e => setId(e.target.value)}
      />

      <button onClick={track}>Track</button>

      {data && (
        <div className="card result">
          <p><b>Status:</b> {data.status}</p>
          <p>
            <b>Response:</b>{" "}
            {data.authorityResponse || "Not updated"}
          </p>
          <p style={{ fontSize: "13px", color: "#555" }}>
            Redirecting to home in 3 seconds...
          </p>
        </div>
      )}
    </div>
  );
}