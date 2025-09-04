import PageHeader from "../../components/pageHeader";
import styles from "./notFoundPage.module.css";
import notFoundImage from "../../assets/notFound.svg";
import { useNavigate } from "react-router";
import PageContainer from "../../components/pageContainer";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <PageContainer>
      <div className={styles.notFoundContainer}>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <p className={styles.message}>
          Sorry, the page you are looking for does not exist.
        </p>
        <img
          src={notFoundImage}
          alt="Not Found"
          className={styles.notFoundImage}
        />
        <button className={styles.homeButton} onClick={goHome}>
          Go to Home
        </button>
      </div>
    </PageContainer>
  );
};

export default NotFoundPage;
