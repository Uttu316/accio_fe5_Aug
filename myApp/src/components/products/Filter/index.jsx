import styles from "./filter.module.css";
const categories = [
  "all",
  "jewelery",
  "electronics",
  "men's clothing",
  "women's clothing",
];
const Filter = ({ setFilter, currCategory }) => {
  const handleFilter = (category) => {
    setFilter(category);
  };
  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.filterTitle}>Filter By:</h3>
      <div className={styles.filterButtons}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.filterButton} ${
              currCategory === category ? styles.activeCategory : ""
            }`}
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
