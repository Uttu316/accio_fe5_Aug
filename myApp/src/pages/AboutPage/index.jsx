import PageHeader from "../../components/pageHeader";
import styles from "./aboutPage.module.css";
import heroImage from "../../assets/hero.svg";
import PageContainer from "../../components/pageContainer";

const AboutPage = () => {
  return (
    <PageContainer>
      <div className={styles.aboutContainer}>
        <h1 className={styles.aboutTitle}>About Us</h1>
        <p className={styles.aboutDescription}>
          Welcome to our company! We are dedicated to providing high-quality
          products and services to our customers. Our team is passionate about
          innovation and excellence in everything we do.
        </p>
        <img src={heroImage} alt="Hero" className={styles.aboutImage} />
      </div>
    </PageContainer>
  );
};

export default AboutPage;
