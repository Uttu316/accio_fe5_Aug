import logo from "../../assets/react.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="page_header">
      <div className="header_logo_wrapper">
        <img className="header_logo" src={logo} />
        <span className="header_logo_txt">React Course</span>
      </div>

      <nav className="header_nav">
        <a className="header_navitem" href="#about">
          About
        </a>
        <a className="header_navitem" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
};
export default Header;
