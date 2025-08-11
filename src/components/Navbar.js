import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  /* ───────────────────────────────
     useEffect: auto‑close on resize
     ─────────────────────────────── */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850 && clicked) {
        setClicked(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, [clicked]); // re‑attach if `clicked` changes

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, idx) => (
          <li key={idx}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon} /> {item.title}
            </Link>
          </li>
        ))}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}

export default Navbar;
