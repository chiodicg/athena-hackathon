import logo from './Circle-logo.png';
import './Header.css';
import { NavLink } from "react-router-dom";

function Header() {
  return (
      <header>
        <div className="logo">
          <img src={logo} className="circle-logo" alt="logo" />
        </div>
        <div className="nav">
          <NavLink to="/product-life"><i className="fas fa-recycle fa-2x nav-image" alt="Go to Extend Product page"></i>
          </NavLink>
          <NavLink to="/company"><i className="fas fa-briefcase fa-2x nav-image" alt="Go to Company page"></i></NavLink>
          <NavLink to="/"><i className="fas fa-heart fa-2x nav-image" alt="Go to Social Media page"></i></NavLink>
          <NavLink to="/profile"><i className="fas fa-user fa-2x nav-image" alt="Go to Profile page"></i></NavLink>
        </div>
      </header>
  );
}

export default Header;
