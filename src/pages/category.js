import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/CategoryPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { releaseMenuOpen, selectMenuOpen } from "../features/menuOpenSlice";

const category = () => {
  const dispatch = useDispatch();
  const menuIsOpen = useSelector(selectMenuOpen);
  const { query } = useRouter();
  const [images, setImages] = useState([]);
  const [imageFolder, setImageFolder] = useState("");

  const closeMenu = () => {
    dispatch(releaseMenuOpen());
  };

  useEffect(() => {
    setImages(query.images);
    setImageFolder(query.imageFolder);
  }, []);

  // console.log("query", query);
  // console.log("images", query.images);
  // console.log("image folder", query.imageFolder);

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
            <h2>{query.title}</h2>
            <div className={styles.categoryPage_images}>
              {images.map((image) => (
                <Image
                  src={`${imageFolder}/${image}`}
                  height={250}
                  width={250}
                  alt="image"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default category;
