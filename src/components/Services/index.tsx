import React from "react";
import styles from "./Services.module.css";
import Service from "./Service";
const Services = () => {
  return (
    <>
      <section className={styles.frameF}>
        <div className={styles.frameG}>
          <h1 className={styles.ourServices}>Our Services</h1>
          <h1 className={styles.areTailored}>are Tailored</h1>
        </div>
      </section>
      <section className={styles.rectangleB}>
        <Service
          // groupPrivacyPolicy="pending_I0:208;133:245"
          detect="Detect"
          itClosesAllTheSecuirtyGap="It closes all the secuirty gaps by swiftily detecting the unknown threats"
        />
        <Service
          // groupPrivacyPolicy="pending_I0:209;133:246"
          detect="Prevent"
          itClosesAllTheSecuirtyGap="It continuously enhances the efficacy of all the in line tools against new security threats"
        />
        <Service
          // groupPrivacyPolicy="pending_I0:210;133:247"
          detect="Respond"
          itClosesAllTheSecuirtyGap="It accelerates and simultaneously prioritize precise alerts to IR teams"
        />
      </section>
    </>
  );
};

export default Services;
