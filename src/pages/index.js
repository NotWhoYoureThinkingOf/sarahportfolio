import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  grabMenuOpen,
  releaseMenuOpen,
  selectMenuOpen,
} from "../features/menuOpenSlice";
import MainMenu from "../components/MainMenu";

export default function Home() {
  const menuIsOpen = useSelector(selectMenuOpen);
  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch(releaseMenuOpen());
  };

  return (
    <div className={styles.home}>
      <div
        className={`${styles.home__banner} ${
          menuIsOpen && styles.home__menuOpen
        }`}
        onClick={closeMenu}
      >
        <div className={styles.home__bannerLeft}>
          <div className={styles.home__bannerLeftContainer}>
            <div className={styles.home__firstName}>
              <Image src="/sarah-logo-black.jpg" width={650} height={388} />
            </div>
            <div className={styles.home__line}></div>
            <p>
              Multimedia artist with focus on oil and acrylic, Sarah Adams.
              Western Massachusetts based artist, <br />
              abstract, nature and portrait art. Vivid colors, commissions
              accepted.
            </p>
            <Link href="/work">
              <button className={styles.home__bannerLeftButton}>
                View Work
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.home__bannerRight}>
          <div className={styles.home__bannerRightContainer}>
            <Image src="/trees.jpg" width={716.625} height={923.625} />
          </div>
        </div>
      </div>
    </div>
  );
}
