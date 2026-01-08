// import Image from "next/image";
// import styles from "./LeadershipCard.module.css";
// import Img from '../../../public/testimonialsimage.webp'

// export default function LeadershipCards() {
//   return (
//     <section className={styles.section}>
//       <div className={styles.row}>

//         <div className={styles.card}>
//           <div className={styles.imageWrap}>
//             <Image src={Img} alt="Leader" fill />
//           </div>
//           <div className={styles.info}>
//             <p className={styles.name}>Name</p>
//             <p className={styles.role}>Designation</p>
//           </div>
//         </div>

//         <div className={`${styles.card} ${styles.center}`}>
//           <div className={styles.imageWrap}>
//             <Image src={Img} alt="Leader" fill />
//           </div>
//           <div className={styles.info}>
//             <p className={styles.name}>Name</p>
//             <p className={styles.role}>Designation</p>
//           </div>
//         </div>

//         <div className={styles.card}>
//           <div className={styles.imageWrap}>
//             <Image src={Img} alt="Leader" fill />
//           </div>
//           <div className={styles.info}>
//             <p className={styles.name}>Name</p>
//             <p className={styles.role}>Designation</p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import styles from "./LeadershipCard.module.css";
import { useRef } from "react";
import { gsap } from "gsap";

export default function LeadershipCards({
  image,
  name,
  designation,
  isFeatured = false,
}) {

  const cardRef = useRef(null);
  const descRef = useRef(null);

  const handleEnter = () => {
    gsap.to(descRef.current, {
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(descRef.current, {
      y: "100%",
      duration: 0.5,
      ease: "power3.in",
    });
  };
  
  return (
    <div ref={cardRef} className={`${styles.card} ${isFeatured ? styles.center : ""}`} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <div className={styles.imageWrap}>
        <Image src={image} alt={name} fill />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.role}>{designation}</p>
      </div>
      <div ref={descRef} className={styles.description}>
        <p>
          With over 15 years of experience in automation and enterprise delivery,
          including at DXC Technologies, Rohit leads ARCA’s vision of combining
          clinical empathy with responsible AI.
        </p>
      </div>
    </div>
  );
}




