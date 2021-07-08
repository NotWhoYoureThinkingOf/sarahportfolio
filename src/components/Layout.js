import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import MainMenu from "./MainMenu";
import { useDispatch, useSelector } from "react-redux";
import { grabMenuOpen, selectMenuOpen } from "../features/menuOpenSlice";

const Layout = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuOpen = useSelector(selectMenuOpen);
  const dispatch = useDispatch();

  const openMenu = () => {
    dispatch(grabMenuOpen());
  };

  console.log(menuOpen);

  return (
    <div>
      <Head>
        <title>Sarah Adams Art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.layout__menu} onClick={openMenu}>
          <p>Menu</p>
          <GiHamburgerMenu style={{ fontSize: "2rem", cursor: "pointer" }} />
        </div>
        <main className={`${styles.main} ${menuIsOpen && styles.menuOpen}`}>
          {children}
        </main>
        <MainMenu />
      </div>
    </div>
  );
};

export default Layout;
