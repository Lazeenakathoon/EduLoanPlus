import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  return (
    <header className="site-navbar">

      <div className="brand">
        EduLoan+
      </div>

      <nav className="site-nav">
        <a href="#benefits">Benefits</a>
        <a href="#stats">Stats</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#emi-calculator">EMI Calculator</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#faq">FAQ</a>
      </nav>

      <div className="auth-links">

        {!user && (
          <>
            <Link
              to="/login"
              className="login-link"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="register-link"
            >
              Register
            </Link>
          </>
        )}

        {user?.role === "user" && (
          <Link
            to="/dashboard"
            className="dashboard-btn"
          >
            Dashboard
          </Link>
        )}

        {user?.role === "admin" && (
          <Link
            to="/admin-dashboard"
            className="admin-btn"
          >
            Admin Dashboard
          </Link>
        )}

      </div>

    </header>
  );
}

export default Navbar;