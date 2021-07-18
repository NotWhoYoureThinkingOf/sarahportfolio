import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Work.module.css";
import { useDispatch, useSelector } from "react-redux";
import { releaseMenuOpen, selectMenuOpen } from "../features/menuOpenSlice";
import MainMenu from "../components/MainMenu";
import works from "../../works";

const work = () => {
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch();
  const menuIsOpen = useSelector(selectMenuOpen);
  const router = useRouter();

  const closeMenu = () => {
    dispatch(releaseMenuOpen());
  };

  console.log("query", router.query);

  return (
    <div
      className={`${styles.work} ${menuIsOpen && styles.work__menuOpen}`}
      onClick={closeMenu}
    >
      <div className={styles.work__container}>
        <div className={styles.work__pageHeader}>
          <div className={styles.work__firstName}>
            <Image
              src="/sarah-logo(first-black).jpg"
              width={162.5}
              height={97}
            />
          </div>
          <div className={styles.work__lastName}>
            <Image
              src="/sarah-logo(last-black).jpg"
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
                {works.map((work) => (
                  <Link
                    href={{
                      pathname: "/category",
                      query: {
                        title: work.title,
                        imageFolder: work.imageFolder,
                        images: work.images,
                      },
                    }}
                    as={work.url}
                    key={work.title}
                  >
                    <a
                      className={` ${styles.work__subject} ${
                        work.category.includes(category) &&
                        styles.work__included
                      }`}
                    >
                      <div className={styles.work__subjectTitle}>
                        {work.title}
                      </div>
                      <Image src={work.image} layout="fill" objectFit="cover" />
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <MainMenu /> */}
    </div>
  );
};

export default work;
