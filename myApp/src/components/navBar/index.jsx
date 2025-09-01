import styles from "./navBar.module.css";
const NavBar = () => {
  return (
    <nav className={styles.pageNav}>
      <NavBarItem link={"#"} label={"About"} />
      <NavBarItem link={"#"} label={"Contact"} />
      <NavBarItem link={"#"} label={"Cart"} />
    </nav>
  );
};
export default NavBar;

const NavBarItem = ({ label, link }) => {
  return (
    <a className={styles.pageNavItem} href={link}>
      {label}
    </a>
  );
};
