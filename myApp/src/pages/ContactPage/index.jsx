import PageHeader from "../../components/pageHeader";
import styles from "./contactPage.module.css";
import reactImage from "../../assets/react.svg";
import PageContainer from "../../components/pageContainer";

const ContactPage = () => {
  return (
    <PageContainer>
      <div className={styles.contactContainer}>
        <h1 className={styles.contactTitle}>Contact Us</h1>
        <p className={styles.contactDescription}>
          Get in touch with us! We'd love to hear from you. Reach out for
          inquiries, support, or just to say hello.
        </p>
        <div className={styles.contactInfo}>
          <p>
            <strong>Email:</strong> contact@myapp.com
          </p>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p>
            <strong>Address:</strong> 123 Main St, City, State 12345
          </p>
        </div>
        <img src={reactImage} alt="React" className={styles.contactImage} />
      </div>
    </PageContainer>
  );
};

export default ContactPage;
