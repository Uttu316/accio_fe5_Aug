import { Link } from "react-router";
import NavBar from "../navBar";
import styles from "./pageHeader.module.css";
const PageHeader = () => {
  return (
    <header className={styles.pageHeader}>
      <h2 className={styles.pageLogo}>
        <Link to="/">Logo</Link>
      </h2>
      <NavBar />
    </header>
  );
};
export default PageHeader;
