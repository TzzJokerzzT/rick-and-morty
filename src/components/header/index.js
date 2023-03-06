import "./Header.css";

import { Logout } from "../login/logout";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h1 className="text-center">
          Rick & Morty{" "}
          <span>
            <img
              src="https://i.imgur.com/HGcOXVS.png"
              className="img-fluid img-logo"
              alt="Rick and Morty Logo"
            />
          </span>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav fs-5">
            <li className="nav-item">
              <a aactiveclassname="as" href="/" className="nav-link">
                <Logout />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
