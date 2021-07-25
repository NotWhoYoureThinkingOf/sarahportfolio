import React from "react";
import styles from "../styles/About.module.css";
import { useDispatch, useSelector } from "react-redux";
import { releaseMenuOpen, selectMenuOpen } from "../features/menuOpenSlice";

const about = () => {
  const dispatch = useDispatch();
  const menuIsOpen = useSelector(selectMenuOpen);

  const closeMenu = () => {
    dispatch(releaseMenuOpen());
  };

  return (
    <div
      className={`${styles.about} ${menuIsOpen ? styles.about__menuOpen : ""}`}
      onClick={closeMenu}
    >
      <h1>about page</h1>
    </div>
  );
};

export default about;
