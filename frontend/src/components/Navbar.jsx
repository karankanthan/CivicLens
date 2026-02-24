import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/civiclens-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo Section */}
        <div className="logo-box">
          <img src={logo} alt="CivicLens Logo" className="logo-img" />
          <div>
            <h2 className="logo-text">Civic<span>Lens</span></h2>
            <p className="logo-moto">Transparency through citizen reporting</p>
          </div>
        </div>

        {/* Navigation */}
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