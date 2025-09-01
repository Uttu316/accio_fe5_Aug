import styles from "./heroContainer.module.css";
import heroImg from "../../assets/hero.svg";

const HeroContainer = () => {
  return (
    <section className={styles.heroContainer}>
      <img src={heroImg} className={styles.heroImg} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>
          Revolutionize Your Workflow with Cutting-Edge AI Products
        </h1>
        <p className={styles.heroDetails}>
          Discover innovative AI solutions designed to enhance productivity,
          automate tasks, and unlock new possibilities. From intelligent
          assistants to advanced analytics, our AI products empower businesses
          and individuals to achieve more, faster, and smarter.
        </p>
        <button className={styles.heroBtn}>Explore AI Products</button>
      </div>
    </section>
  );
};

export default HeroContainer;
