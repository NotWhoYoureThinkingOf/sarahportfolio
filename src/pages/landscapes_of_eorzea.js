import React from "react";
import Image from "next/image";
import styles from "../styles/CategoryPage.module.css";

const landscapes_of_eorzea = () => {
  return (
    <div className={styles.categoryPage}>
      <div className={styles.categoryPage__container}>
        <div className={styles.categoryPage__pageHeader}>
          <div className={styles.categoryPage__firstName}>
            <Image
              src="/sarah-logo(first-black).jpg"
              width={162.5}
              height={97}
            />
          </div>
          <div className={styles.categoryPage__lastName}>
            <Image
              src="/sarah-logo(last-black).jpg"
              width={155.925}
              height={130.35}
            />
          </div>
        </div>
        <div className={styles.categoryPage__body}>
          <div className={styles.categoryPage__bodyContainer}>
            landscapes of eorzea
          </div>
        </div>
      </div>
    </div>
  );
};

export default landscapes_of_eorzea;