import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Service.module.css";

export type Component1ServiceType = {
  dEFENSIVESECURITYMANAGEDS?: string;
  writeHere?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propHeight?: CSSProperties["height"];
};

const Component1Service: FunctionComponent<Component1ServiceType> = ({
  dEFENSIVESECURITYMANAGEDS,
  writeHere,
  propGap,
  propHeight,
}) => {
  const component1ServiceStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const dEFENSIVESECURITYStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.component1service} style={component1ServiceStyle}>
      <img className={styles.phoneNumberIcon} alt="" src="/vector-6.svg" />
      <div className={styles.submit}>
        <h1 className={styles.defensiveSecurity} style={dEFENSIVESECURITYStyle}>
          {dEFENSIVESECURITYMANAGEDS}
        </h1>
      </div>
      <div className={styles.aboutUsServicesContact}>
        <div className={styles.vector}>
          <div className={styles.ourAcademicPartners}>
            <div className={styles.ourCollaborationPartners}>
              <div className={styles.image} />
              <h1 className={styles.readMore}>
                <p className={styles.read}>{`Read `}</p>
                <p className={styles.more}>More</p>
              </h1>
            </div>
            <img
              className={styles.ourAcademicPartnersChild}
              loading="lazy"
              alt=""
              src="/group-456.svg"
            />
          </div>
        </div>
        <img className={styles.writeHereIcon} alt="" src={writeHere} />
      </div>
    </div>
  );
};

export default Component1Service;
