import { useState } from "react";
import axios from "axios";
import "../styles/Track.css";

export default function Track() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const track = async () => {
    const res = await axios.get(`http://localhost:5000/api/complaints/track/${id}`);
    setData(res.data);
  };

  return (
    <div className="track card">
      <h2>Track Complaint</h2>
      <input placeholder="Tracking ID" onChange={e => setId(e.target.value)} />
      <button onClick={track}>Track</button>

      {data && (
        <div className="card result">
          <p>Status: {data.status}</p>
          <p>Response: {data.authorityResponse || "Not updated"}</p>
        </div>
      )}
    </div>
  );
}