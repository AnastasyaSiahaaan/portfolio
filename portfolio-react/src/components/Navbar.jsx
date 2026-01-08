import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  padding: "10px 14px",
  borderRadius: 12,
  textDecoration: "none",
  fontWeight: 600,
  color: isActive ? "white" : "#111",
  background: isActive ? "#111" : "transparent",
});

export default function Navbar() {
  return (
    <header style={{ borderBottom: "1px solid #eee" }}>
      <nav
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div style={{ fontWeight: 800, fontSize: 16 }}>Anastasya Siahaan</div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <NavLink to="/" style={linkStyle} end>Home</NavLink>
          <NavLink to="/about" style={linkStyle}>About</NavLink>
          <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
          <NavLink to="/resume" style={linkStyle}>Resume</NavLink>
        </div>
      </nav>
    </header>
  );
}
