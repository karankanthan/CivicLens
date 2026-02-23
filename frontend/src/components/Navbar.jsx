import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">Civic<span>Lens</span></h2>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/report">Report</NavLink>
          <NavLink to="/track">Track</NavLink>
          <NavLink to="/login" className="auth-btn">Authority</NavLink>
        </div>
      </div>
    </nav>
  );
}