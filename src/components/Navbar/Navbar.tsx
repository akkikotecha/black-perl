import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent: FunctionComponent = () => {
  return (
    // <div className="row">
    <header className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <img
        className={styles.logoTransparentForBlackBg}
        alt=""
        src="/logotransparent-for-black-bg-1-1@2x.png"
      />
      <img
        className={styles.image1Icon}
        loading="lazy"
        alt=""
        src="/image-1@2x.png"
      />
      <div className={styles.textInputField}>
        <div className={styles.buttonFrame}>
          <div className={styles.home}>Home</div>
          <div className={styles.aboutUs}>
            <div className={styles.aboutUs1}>About Us</div>
            {/* <div className={styles.aboutUs2}>About Us</div> */}
          </div>
          <div className={styles.services}>
            <div className={styles.services1}>Services</div>
            {/* <div className={styles.services2}>Services</div> */}
          </div>
          <div className={styles.training}>
            <div className={styles.training1}>Training</div>
            {/* <div className={styles.training2}>Training</div> */}
          </div>
          <div className={styles.reviews}>
            <div className={styles.reviews1}>{`Reviews  `}</div>
            {/* <div className={styles.reviews2}>{`Reviews  `}</div> */}
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.imageFrame} />
          <img
            className={styles.menuChild}
            loading="lazy"
            alt=""
            src="/group-1171276217.svg"
          />
          <div className={styles.reviewsAcademyTrainingAbout}>
            <div className={styles.menu1}>Menu</div>
          </div>
        </div>
      </div>
    </header>
    // </div>
  );
};

export default GroupComponent;
