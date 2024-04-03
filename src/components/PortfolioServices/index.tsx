import { FunctionComponent } from "react";
import Component1Service from "./Service";
import styles from "./PortfolioServices.module.css";

const WriteHereLabel: FunctionComponent = () => {
  return (
    <section className={styles.writeHereLabel}>
      <div className={styles.agreeTermsCheckboxGroup}>
        <div className={styles.imageFrame}>
          <div className={styles.headerFrame}>
            <div className={styles.subheaderFrame}>
              <h1 className={styles.services}>Services</h1>
              <h1 className={styles.relationFirst}>
                RELATION FIRST – CUSTOM SOLUTION
              </h1>
            </div>
            <div className={styles.text}>
              <img
                className={styles.textChild}
                loading="lazy"
                alt=""
                src="/group-1171276224@2x.png"
              />
            </div>
            <img
              className={styles.headerFrameChild}
              alt=""
              src="/group-457-2.svg"
            />
          </div>
        </div>
        <h1 className={styles.portfolio}>Portfolio</h1>
      </div>
      <div className={styles.component1serviceParent}>
        <Component1Service
          dEFENSIVESECURITYMANAGEDS={`DEFENSIVE SECURITY & MANAGED SERVICES`}
          writeHere="pending_I0:148;97:75"
        />
        <Component1Service
          dEFENSIVESECURITYMANAGEDS={`INDUSTRIAL TRAINING & CERTIFICATION`}
          writeHere="pending_I0:151;97:75"
          propGap="171px 0px"
          propHeight="111px"
        />
        <Component1Service
          dEFENSIVESECURITYMANAGEDS={`LIVE TRAINING & CERTIFICATION`}
          writeHere="pending_I0:152;97:75"
          propGap="171px 0px"
          propHeight="111px"
        />
      </div>
    </section>
  );
};

export default WriteHereLabel;
