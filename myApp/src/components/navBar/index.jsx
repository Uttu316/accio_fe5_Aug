import { NavLink } from "react-router";
import styles from "./navBar.module.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
const NavBar = () => {
  const { cartLength } = useContext(CartContext);
  return (
    <nav className={styles.pageNav}>
      <NavBarItem link={"/about"} label={"About"} />
      <NavBarItem link={"/contact"} label={"Contact"} />
      <NavBarItem link={"/cart"} label={"Cart"} count={cartLength} />
    </nav>
  );
};
export default NavBar;

const NavBarItem = ({ label, link, count }) => {
  const isCount = count !== undefined;
  return (
    <NavLink
      className={({ isActive }) => `${styles.pageNavItem} 
        ${isActive ? styles.pageNavItem_active : ""}`}
      to={link}
    >
      {label}
      {isCount && (
        <span className={styles.count}>{count > 9 ? "9+" : count}</span>
      )}
    </NavLink>
  );
};
