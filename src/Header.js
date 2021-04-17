import logo from './Circle-logo.png';
import './Header.css';

function Header() {
  return (
      <header>
        <div className="logo">
          <img src={logo} className="circle-logo" alt="logo" />
        </div>
        <div className="nav">
          <i className="fas fa-recycle fa-2x nav-image" alt="Go to Extend Product page">
            <a href="" target="_blank" rel='noreferrer noopener'></a>
          </i>
          <i className="fas fa-briefcase fa-2x nav-image" alt="Go to Company page"></i>
          <i className="fas fa-heart fa-2x nav-image" alt="Go to Social Media page"></i>
          <i className="fas fa-user fa-2x nav-image" alt="Go to Profile page"></i>
        </div>
      </header>
  );
}

export default Header;
