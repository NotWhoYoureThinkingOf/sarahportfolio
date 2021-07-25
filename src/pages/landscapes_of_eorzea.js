import React from "react";
import styles from "../styles/CategoryPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { releaseMenuOpen, selectMenuOpen } from "../features/menuOpenSlice";

const landscapes_of_eorzea = () => {
  const dispatch = useDispatch();
  const menuIsOpen = useSelector(selectMenuOpen);

  const closeMenu = () => {
    dispatch(releaseMenuOpen());
  };

  return (
    <div
      className={`${styles.categoryPage} ${
        menuIsOpen ? styles.categoryPage__menuOpen : ""
      }`}
      onClick={closeMenu}
    >
      <h1>this is the landscapes of eorzea page</h1>
    </div>
  );
};

export default landscapes_of_eorzea;
