import { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo">Rygebz</div>

        {/* Centered links for large screens */}
        <div className="nav-links">
          <a href="https://github.com/Rygebz" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> Github
          </a>
        </div>

        {/* Hamburger for small screens */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="https://github.com/Rygebz" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> Github
          </a>
        </div>
      )}
    </nav>
  );
}