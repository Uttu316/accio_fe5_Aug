import { NavLink } from "react-router";
import styles from "./navBar.module.css";
const NavBar = () => {
  return (
    <nav className={styles.pageNav}>
      <NavBarItem link={"/about"} label={"About"} />
      <NavBarItem link={"/contact"} label={"Contact"} />
      <NavBarItem link={"/cart"} label={"Cart"} />
    </nav>
  );
};
export default NavBar;

const NavBarItem = ({ label, link }) => {
  return (
    <NavLink
      className={({ isActive }) => `${styles.pageNavItem} 
        ${isActive ? styles.pageNavItem_active : ""}`}
      to={link}
    >
      {label}
    </NavLink>
  );
};
