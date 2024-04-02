import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const FooterSection: FunctionComponent = () => {
  return (
    <div className={styles.footerSection}>
      <div className={styles.frameWithTitleAndSubtitle}>
        <img className={styles.image1Icon} alt="" src="/image-1-1@2x.png" />
        <div className={styles.instaFbYTFrame}>
          <div className={styles.instaFbYTLabel}>
            <img
              className={styles.instaIcon}
              loading="lazy"
              alt=""
              src="/insta.svg"
            />
            <img
              className={styles.fbIcon}
              loading="lazy"
              alt=""
              src="/fb.svg"
            />
            <img
              className={styles.ytIcon}
              loading="lazy"
              alt=""
              src="/yt.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
