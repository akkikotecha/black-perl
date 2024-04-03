import { FunctionComponent } from "react";
import styles from "./Relation.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.callToActionWrapper}>
      <div className={styles.callToAction}>
        <div className={styles.group}>
          <div className={styles.phoneNumberInput}>
            <img
              className={styles.phoneNumberInputChild}
              alt=""
              src="/group-1171276224@2x.png"
            />
            <img
              className={styles.phoneNumberInputItem}
              alt=""
              src="/group-457-2.svg"
            />
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.nameInput}>
            <div className={styles.submitBtn}>
              <img
                className={styles.titleprimaryleftIcon}
                alt=""
                src="/vector-12.svg"
              />
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.nameInput1}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector-12.svg" />
              <img
                className={styles.maskGroupIcon1}
                alt=""
                src="/mask-group-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
