import { useState } from "react";
import axios from "axios";
import "../styles/Report.css";

export default function Report() {
  const [form, setForm] = useState({});
  const [image, setImage] = useState(null);

  const submit = async () => {
    const data = new FormData();
    data.append("category", form.category);
    data.append("location", form.location);
    data.append("description", form.description);
    data.append("image", image);

    const res = await axios.post("http://localhost:5000/api/complaints", data);
    alert("Tracking ID: " + res.data.trackingId);
  };

  return (
    <div className="report-form card">
      <h2>Report Civic Issue</h2>
      <input placeholder="Category" onChange={e => setForm({...form, category:e.target.value})}/>
      <input placeholder="Location" onChange={e => setForm({...form, location:e.target.value})}/>
      <textarea placeholder="Description" onChange={e => setForm({...form, description:e.target.value})}/>
      <input type="file" onChange={e => setImage(e.target.files[0])}/>
      <button onClick={submit}>Submit</button>
    </div>
  );
}