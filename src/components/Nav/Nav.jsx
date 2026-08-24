import { useState } from "react";
import { NavLink } from "react-router-dom";
import { site } from "../../content/site.js";
import "./Nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="chips" aria-hidden="true"><i /><i /><i /></span>
          {site.name}
        </NavLink>

        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {site.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `nav__link ${isActive ? "is-active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
