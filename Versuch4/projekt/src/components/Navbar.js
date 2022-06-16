import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-header">
          <div className="nav-title">DVA</div>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/xss">XSS</Link>
          <Link to="/counter-increment">Inkrementieren</Link>
          <Link to="/counter-multiply">Multiplizieren</Link>
          <Link to="/button">Button</Link>
          <Link to="/bootstrap">Bootstrap</Link>
        </div>
      </div>
    </>
  );
};
