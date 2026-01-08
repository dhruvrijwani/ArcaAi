// import React from 'react'
// import styles from './visionCard.module.css'
// import Image from 'next/image'

// function VisionCard() {
//   return (
//     <section className={styles.visioncard}>
//         <div className="swcontainer">
//             <section className={styles.section1}>
//                 <div className={styles.visiongrid}>
//                     <h2 className={styles.cardTitle}>Vision</h2>

//                     <div className={styles.visionflex}>
//                         <div className={styles.leftimg}>
//                             <div className={styles.imageWrap}>
//                         <Image
//                             src='/Story/story.webp'
//                             alt="Vision visual"
//                             fill
//                             priority
//                         />
//                         </div>
                        
//                         </div>

//                         <div className={styles.rightinfo}>
//                             <p className={styles.cardDesc}>To be a compelling force in creating a symbiotic ecosystem where AI & human wisdom unite to preserve moral values and collective intelligence</p>
                        
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className={styles.section2}>
//                 <div className={styles.missiongrid}>
//                     <h2 className={styles.cardTitlle}>Mission</h2>

//                     <div className={styles.missionflex}>
//                         <div className={styles.missionleft}></div>
//                         <div className={styles.missionright}></div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     </section>
//   )
// }

// export default VisionCard


import React from "react";
import styles from "./visionCard.module.css";
import Image from "next/image";

function VisionCard() {
  return (
    <section className={styles.visioncard}>
      <div className="swcontainer">

        {/* VISION */}
        <section className={styles.section}>
          <div className={styles.grid}>
            <h2 className={styles.cardTitle}>Vision</h2>

            <div className={styles.twocol}>
              <div className={styles.imageWrap}>
                <Image
                  src="/Story/story.webp"
                  alt="Vision visual"
                  fill
                  priority
                />
              </div>

              <p className={styles.cardDesc}>
                To be a compelling force in creating a symbiotic ecosystem where
                AI & human wisdom unite to preserve moral values and collective
                intelligence
              </p>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className={styles.section}>
          <div className={styles.grid}>
            <h2 className={styles.cardTitle}>Mission</h2>

            <div className={styles.missionGrid}>
              <div className={styles.missionLeft}>
                <p className={styles.missionIntro}>
                  To support every healthcare stakeholder with ethical,
                  practical, and human-centered AI solutions.
                </p>

                <p className={styles.missionSub}>We care to help:</p>
              </div>

              <div className={styles.missionRight}>
                <ul className={styles.missionList}>
                  <li>Deliver better care</li>
                  <li>Operate with greater accuracy</li>
                  <li>Innovate responsibly</li>
                  <li>And lead healthier lives</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}

export default VisionCard;
