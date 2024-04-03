import { FunctionComponent } from "react";
import styles from "./HowAreWeDifferent.module.css";

const RectangleShape: FunctionComponent = () => {
  return (
    <div className={styles.rectangleShape}>
      <div className={styles.frameLink}>
        <h1 className={styles.weDifferent}>WE DIFFERENT</h1>
        <div className={styles.getInfoIcon}>
          <h1 className={styles.mostAffordablePriceContainer}>
            <p className={styles.mostAffordable}>{`MOST AFFORDABLE `}</p>
            <p className={styles.price}>PRICE</p>
          </h1>
          <div className={styles.phoneNumberFrame}>
            <img
              className={styles.phoneNumberFrameChild}
              loading="lazy"
              alt=""
              src="/group-465.svg"
            />
            <div className={styles.agreeGroup}>
              <img
                className={styles.agreeGroupChild}
                loading="lazy"
                alt=""
                src="/group-465.svg"
              />
              <h1 className={styles.bestReturnOnContainer}>
                <p className={styles.bestReturnOn}>{`BEST RETURN ON `}</p>
                <p className={styles.investment}>INVESTMENT</p>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameContactInfo}>
        <img
          className={styles.frameContactInfoChild}
          alt=""
          src="/group-1171276223.svg"
        />
        <h1 className={styles.costlyCertificates}>Costly Certificates</h1>
        <h1 className={styles.trueKnowledge}>!= True Knowledge</h1>
        <div className={styles.ourPartnersFrame}>
          <div className={styles.frameReviews}>
            <img
              className={styles.frameReviewsChild}
              loading="lazy"
              alt=""
              src="/group-465.svg"
            />
            <h1 className={styles.decadesOldExperienceContainer}>
              <p className={styles.decadesOld}>{`DECADES OLD `}</p>
              <p className={styles.experience}>EXPERIENCE</p>
            </h1>
          </div>
        </div>
        <div className={styles.ourPartnersFrame1}>
          <img
            className={styles.ourPartnersFrameChild}
            loading="lazy"
            alt=""
            src="/group-465.svg"
          />
          <h1 className={styles.weBuildRelationsContainer}>
            <p className={styles.weBuildRelations}>WE BUILD RELATIONS</p>
            <p className={styles.notClient}>NOT CLIENT</p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RectangleShape;
