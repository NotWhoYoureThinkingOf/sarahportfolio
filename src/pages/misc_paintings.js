import React from "react";
import styles from "../styles/CategoryPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { releaseMenuOpen, selectMenuOpen } from "../features/menuOpenSlice";

const misc_paintings = () => {
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
      <h1>this is the misc paintings page</h1>
    </div>
  );
};

export default misc_paintings;
