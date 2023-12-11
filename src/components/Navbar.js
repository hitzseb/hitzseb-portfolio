import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary" data-bs-theme="dark">
      <div className="container-fluid">

        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-primary" tabindex="-1" id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label">
          <div className="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div class="offcanvas-body justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link to="/skills" className="nav-link">Skills</Link>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link to="/projects" className="nav-link">Projects</Link>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;