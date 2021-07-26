import React, { useEffect, useState } from "react";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import styles from "../../../styles/CategoryPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectMenuOpen } from "../../../features/menuOpenSlice";
import { selectCategory } from "../../../features/categorySlice";
import works from "../../../../works";

const category = ({}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const menuIsOpen = useSelector(selectMenuOpen);
  const chosenCategory = useSelector(selectCategory);
  const [chosenWorks, setChosenWorks] = useState(null);
  const [chosenWork, setChosenWork] = useState(null);
  const [queryID, setQueryID] = useState(null);
  // const { query } = useRouter();
  const [images, setImages] = useState([]);
  const [imageFolder, setImageFolder] = useState("");

  const closeMenu = () => {
    dispatch(releaseMenuOpen());
  };

  useEffect(() => {
    const result = works.filter((work) => work.url.includes(router.query.id));

    setChosenWorks(result);
  }, []);

  useEffect(() => {
    if (chosenWorks) {
      setChosenWork(chosenWorks[0]);
    }
  }, [chosenWorks]);

  console.log("queryID", queryID);
  console.log("chosenWork", chosenWork);

  // useEffect(() => {
  //   setImages(query.images);
  //   setImageFolder(query.imageFolder);
  // }, [query]);

  // console.log("query", query);
  // console.log("images", query.images);
  // console.log("image folder", query.imageFolder);

  // console.log("redux category", chosenCategory);

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
              src="/sarah-logo(first-black).png"
              width={162.5}
              height={97}
            />
          </div>
          <div className={styles.categoryPage__lastName}>
            <Image
              src="/sarah-logo(last-black).png"
              width={155.925}
              height={130.35}
            />
          </div>
        </div>
        <div className={styles.categoryPage__body}>
          <div className={styles.categoryPage__bodyContainer}>
            <h2>{chosenWork?.title}</h2>
            <div className={styles.categoryPage_images}>
              {/* {chosenCategory?.images.map((image, i) => (
                <div className={styles.categoryPage__image}>
                  <Image
                    src={`/${chosenCategory?.imageFolder}/${image}`}
                    height={250}
                    width={250}
                    alt="image"
                  />
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default category;
