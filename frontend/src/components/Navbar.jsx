import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>FitProgress</h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add Progress</Link>
        <Link to="/history">History</Link>
      </div>
    </nav>
  );
}

export default Navbar;