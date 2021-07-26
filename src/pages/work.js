import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import styles from "../styles/Work.module.css";
import { useDispatch, useSelector } from "react-redux";
import { releaseMenuOpen, selectMenuOpen } from "../features/menuOpenSlice";
import {
  grabCategory,
  selectCategories,
  selectCategory,
} from "../features/categorySlice";
// import MainMenu from "../components/MainMenu";
import works from "../../works";

const work = ({}) => {
  const [category, setCategory] = useState("all");
  const allCategories = useSelector(selectCategories);
  const chosenCategory = useSelector(selectCategory);
  const dispatch = useDispatch();
  const menuIsOpen = useSelector(selectMenuOpen);
  const router = useRouter();

  const closeMenu = () => {
    dispatch(releaseMenuOpen());
  };

  // useEffect(() => {
  //   closeMenu();
  // }, [menuIsOpen]);

  const chooseCategory = (e) => {
    console.log("clicked this one -> ", e);
    dispatch(
      grabCategory({
        title: e.title,
        imageFolder: e.imageFolder,
        images: e.images,
      })
    );
  };

  console.log(chosenCategory);

  return (
    <motion.div
      className={`${styles.work} ${menuIsOpen && styles.work__menuOpen}`}
      onClick={closeMenu}
    >
      <div className={styles.work__container}>
        <div className={styles.work__pageHeader}>
          <div className={styles.work__firstName}>
            <Image
              src="/sarah-logo(first-black).png"
              width={162.5}
              height={97}
            />
          </div>
          <div className={styles.work__lastName}>
            <Image
              src="/sarah-logo(last-black).png"
              width={155.925}
              height={130.35}
            />
          </div>
        </div>
        <div className={styles.work__body}>
          <div className={styles.work__bodyContainer}>
            <div className={styles.work__title}>
              <h2>My Work</h2>
            </div>
            <div className={styles.work__line}></div>
            <div className={styles.work__content}>
              <div className={styles.work__categories}>
                <div
                  className={styles.work__category}
                  onClick={() => setCategory("all")}
                >
                  <p>All</p>
                  <div className={styles.work__underline}></div>
                </div>
                <div
                  className={styles.work__category}
                  onClick={() => setCategory("paintings")}
                >
                  <p>Paintings</p>
                  <div className={styles.work__underline}></div>
                </div>
                <div
                  className={styles.work__category}
                  onClick={() => setCategory("photography")}
                >
                  <p>Photography</p>
                  <div className={styles.work__underline}></div>
                </div>
                <div
                  className={styles.work__category}
                  onClick={() => setCategory("sculptures")}
                >
                  <p>Sculptures</p>
                  <div className={styles.work__underline}></div>
                </div>
                <div
                  className={styles.work__category}
                  onClick={() => setCategory("drawings")}
                >
                  <p>Drawings</p>
                  <div className={styles.work__underline}></div>
                </div>
                <div
                  className={styles.work__category}
                  onClick={() => setCategory("mixed")}
                >
                  <p>Mixed</p>
                  <div className={styles.work__underline}></div>
                </div>
              </div>
              <div className={styles.work__subjects}>
                {works.map((subject) => (
                  <Link
                    href="/category/[id]"
                    as={`/category${subject.url}`}
                    key={subject.id}
                  >
                    <a
                      className={`${styles.work__subject} ${
                        subject.category.includes(category) &&
                        styles.work__included
                      }`}
                      // onClick={() => chooseCategory(subject)}
                    >
                      <div className={styles.work__subjectTitle}>
                        {subject.title}
                      </div>
                      {/* <Image
                        src={subject.image}
                        layout="fill"
                        objectFit="cover"
                      /> */}
                      <img src={subject.image} alt={subject.title} />
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <MainMenu /> */}
    </motion.div>
  );
};

export default work;
