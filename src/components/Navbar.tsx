import React from "react";
import { NavLink } from "react-router-dom";
import agaLogo from "../assets/images/aga-logo.png";

type NavbarProps = React.HTMLAttributes<HTMLElement>;

const NAV_ITEMS = [
  { to: "/", label: "Home", accent: "nav-red" },
  { to: "/about", label: "About Us", accent: "nav-yellow" },
  { to: "/blog", label: "Our Blog", accent: "nav-green" },
  { to: "/resources", label: "Resources", accent: "nav-red" },
  { to: "/events", label: "Our Events", accent: "nav-yellow" },
  { to: "/faq", label: "FAQ", accent: "nav-green" },
];

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className = "", ...rest }, ref) => {
    const [open, setOpen] = React.useState(false);
    const closeMenu = () => setOpen(false);
    const navClasses = ["hero-nav", className].filter(Boolean).join(" ");

    const renderNavLinks = (extraClass?: string) =>
      NAV_ITEMS.map(({ to, label, accent }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            [
              "nav-link",
              accent,
              extraClass,
              isActive ? "active" : "",
            ]
              .filter(Boolean)
              .join(" ")
          }
          onClick={closeMenu}
        >
          {label}
        </NavLink>
      ));

    // Lock body scroll when drawer is open and close on ESC
    React.useEffect(() => {
      if (open) {
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => {
          if (e.key === "Escape") closeMenu();
        };
        window.addEventListener("keydown", onKey);
        return () => {
          document.body.style.overflow = original;
          window.removeEventListener("keydown", onKey);
        };
      }
    }, [open]);

    return (
      <nav ref={ref} className={navClasses} {...rest}>
        <div className="nav-brand">
          <img src={agaLogo} alt="MIT AGA Logo" className="nav-logo" />
          <h1 className="brand-name">
            MIT
            <br />
            <span className="brand-accent">A</span>frican
            <br />
            <span className="brand-accent-yellow">G</span>raduate
            <br />
            <span className="brand-accent-green">A</span>ssociation
          </h1>
        </div>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <i className="fas fa-bars" aria-hidden="true"></i>
        </button>
        {/* Desktop links */}
        <div id="primary-navigation" className="nav-links">
          {renderNavLinks()}
        </div>

        {/* Drawer + backdrop for mobile */}
        <div
          className={`nav-backdrop${open ? " open" : ""}`}
          onClick={closeMenu}
          aria-hidden={!open}
        />
        <aside
          id="mobile-drawer"
          className={`nav-drawer${open ? " open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Primary navigation"
          aria-hidden={!open}
        >
          <button className="nav-close" aria-label="Close menu" onClick={closeMenu}>
            <i className="fas fa-xmark" aria-hidden="true"></i>
          </button>
          {renderNavLinks("nav-link--drawer")}
        </aside>
      </nav>
    );
  },
);

Navbar.displayName = "Navbar";

export default Navbar;
