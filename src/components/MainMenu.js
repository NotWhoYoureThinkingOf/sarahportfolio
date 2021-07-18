import React from "react";
import Link from "next/link";
import styles from "../styles/MainMenu.module.css";
import { selectMenuOpen } from "../features/menuOpenSlice";
import { useSelector } from "react-redux";

const MainMenu = () => {
  const menuIsOpen = useSelector(selectMenuOpen);

  return (
    <div
      className={`${styles.mainMenu} ${
        !menuIsOpen && styles.mainMenu__menuClosed
      }`}
    >
      <div className={styles.mainMenu__container}>
        <Link href="">
          <a className={menuIsOpen && styles.mainMenu__menuOpen}>Home</a>
        </Link>
        <Link href="">
          <a className={menuIsOpen && styles.mainMenu__menuOpen}>About</a>
        </Link>
        <Link href="/work">
          <a className={menuIsOpen && styles.mainMenu__menuOpen}>Work</a>
        </Link>
        <Link href="">
          <a className={menuIsOpen && styles.mainMenu__menuOpen}>Blog</a>
        </Link>
        <Link href="">
          <a className={menuIsOpen && styles.mainMenu__menuOpen}>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default MainMenu;
