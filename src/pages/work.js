import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Work.module.css";
import { useDispatch, useSelector } from "react-redux";
import { releaseMenuOpen, selectMenuOpen } from "../features/menuOpenSlice";
import MainMenu from "../components/MainMenu";
import works from "../../works";

const work = () => {
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch();
  const menuIsOpen = useSelector(selectMenuOpen);

  const closeMenu = () => {
    dispatch(releaseMenuOpen());
  };

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
                  <div
                    className={` ${styles.work__subject} ${
                      work.category.includes(category) && styles.work__included
                    }`}
                  >
                    <div className={styles.work__subjectTitle}>
                      {work.title}
                    </div>
                    <Image src={work.image} layout="fill" objectFit="cover" />
                  </div>
                ))}
                {/* <div
                  className={`${styles.work__eorzea} ${styles.work__subject}`}
                >
                  <div className={styles.work__subjectTitle}>
                    Landscapes of Eorzea
                  </div>
                  <Image
                    src="/art/eorzea1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className={`${styles.work__digitalPaintings} ${styles.work__subject}`}
                >
                  <div className={styles.work__subjectTitle}>
                    Digital Paintings
                  </div>
                  <Image
                    src="/art/digitalpainting1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className={`${styles.work__thesis} ${styles.work__subject}`}
                >
                  <div className={styles.work__subjectTitle}>
                    Tor(e)ment - BFA Thesis Exhibition
                  </div>
                  <Image
                    src="/art/thesis1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className={`${styles.work__portraitPaintings} ${styles.work__subject}`}
                >
                  <div className={styles.work__subjectTitle}>
                    Portrait Paintings
                  </div>
                  <Image
                    src="/art/portraitpainting1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className={`${styles.work__naturePaintings} ${styles.work__subject}`}
                >
                  <div className={styles.work__subjectTitle}>
                    Nature Paintings
                  </div>
                  <Image
                    src="/art/naturepainting1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className={`${styles.work__miscPhoto} ${styles.work__subject}`}
                >
                  <div className={styles.work__subjectTitle}>
                    Misc. Photography
                  </div>
                  <Image
                    src="/art/miscphoto1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className={`${styles.work__naturePhoto} ${styles.work__subject}`}
                >
                  <div className={styles.work__subjectTitle}>
                    Nature Photography
                  </div>
                  <Image
                    src="/art/naturephoto1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className={`${styles.work__petPhoto} ${styles.work__subject}`}
                >
                  <div className={styles.work__subjectTitle}>
                    Pet Photography
                  </div>
                  <Image
                    src="/art/petphoto1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className={`${styles.work__miscPaintings} ${styles.work__subject}`}
                >
                  <div className={styles.work__subjectTitle}>
                    Misc. Paintings
                  </div>
                  <Image
                    src="/art/miscpainting1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className={`${styles.work__mixed} ${styles.work__subject}`}
                >
                  <div className={styles.work__subjectTitle}>
                    Misc. Mixed Media
                  </div>
                  <Image
                    src="/art/miscmixed1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className={`${styles.work__plasterScultptures} ${styles.work__subject}`}
                >
                  <div className={styles.work__subjectTitle}>
                    Plaster Sculptures
                  </div>
                  <Image
                    src="/art/plastersculpture1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className={`${styles.work__portraitPhoto} ${styles.work__subject}`}
                >
                  <div className={styles.work__subjectTitle}>
                    Portrait Photography
                  </div>
                  <Image
                    src="/art/portraitphoto1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className={`${styles.work__miscDrawings} ${styles.work__subject}`}
                >
                  <div className={styles.work__subjectTitle}>
                    Misc. Drawings
                  </div>
                  <Image
                    src="/art/miscdrawing1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div> */}
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
