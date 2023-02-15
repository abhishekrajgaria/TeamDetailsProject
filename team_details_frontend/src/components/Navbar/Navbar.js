import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <nav className="navbar navbar-expand-lg bg-primary-subtle">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Team Details
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/team">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/add_member" data-testid="add-new-link">
                  Add New
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
