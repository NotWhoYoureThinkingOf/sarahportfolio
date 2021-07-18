import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/CategoryPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { releaseMenuOpen, selectMenuOpen } from "../features/menuOpenSlice";

const landscapes_of_eorzea = () => {
  const dispatch = useDispatch();
  const menuIsOpen = useSelector(selectMenuOpen);
  const { query } = useRouter();

  const closeMenu = () => {
    dispatch(releaseMenuOpen());
  };

  console.log("query", query);

  return (
    <div
      className={`${styles.categoryPage} ${
        menuIsOpen ? styles.categoryPage__menuOpen : ""
      }`}
      onClick={closeMenu}
    >
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
            <h2>Landscapes of Eorzea</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landscapes_of_eorzea;
