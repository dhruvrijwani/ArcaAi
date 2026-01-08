// "use client"

// import React, { useRef, useState} from 'react';
// import styles from './PartnerCarousel.module.css';
// import { PartnerCard } from '../PartnerCard/PartnerCard';
// import { PARTNERS } from './constants';

// export default function PartnerCarousel() {
//   const scrollRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);


//   /* Drag handlers */
//   const handleMouseDown = (e) => {
//     if (!scrollRef.current) return;
//     setIsDragging(true);
//     setStartX(e.pageX - scrollRef.current.offsetLeft);
//     setScrollLeft(scrollRef.current.scrollLeft);
//   };

//   const stopDragging = () => setIsDragging(false);

//   const handleMouseMove = (e) => {
//     if (!isDragging || !scrollRef.current) return;
//     e.preventDefault();

//     const x = e.pageX - scrollRef.current.offsetLeft;
//     const walk = (x - startX) * 2;
//     scrollRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const scroll = (direction) => {
//     if (!scrollRef.current) return;

//     const cardWidth = 288 + 24;
//     const move = direction === 'left' ? -cardWidth : cardWidth;

//     scrollRef.current.scrollBy({
//       left: move,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <div className={styles.wrapper}>
//       {/* Carousel */}
//       <div
//         ref={scrollRef}
//         onMouseDown={handleMouseDown}
//         onMouseLeave={stopDragging}
//         onMouseUp={stopDragging}
//         onMouseMove={handleMouseMove}
//         className={`${styles.carousel} ${
//           isDragging ? styles.dragging : styles.grab
//         }`}
//       >
//         {PARTNERS.map((partner, index) => (
//           <div key={partner.id} className={styles.snapItem}>
//             <PartnerCard
//               partner={partner}
//             />
//           </div>
//         ))}

//         <div className={styles.mobileSpacer} />
//       </div>

//       {/* Bottom Controls */}
//       <div className={styles.controls}>
//         {/* Dots + Arrows */}
//         <div className={styles.navGroup}>
//           <div className={styles.arrows}>
//             <button
//               onClick={() => scroll('left')}
//               className={styles.arrowBtn}
//               aria-label="Scroll left"
//             >
//               <svg viewBox="0 0 24 24">
//                 <path d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>

//             <button
//               onClick={() => scroll('right')}
//               className={styles.arrowBtn}
//               aria-label="Scroll right"
//             >
//               <svg viewBox="0 0 24 24">
//                 <path d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useRef } from "react";
import styles from "./PartnerCarousel.module.css";
import { PartnerCard } from "../PartnerCard/PartnerCard";
import { PARTNERS } from "./constants";

export default function PartnerCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const containerWidth = scrollRef.current.offsetWidth;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -containerWidth : containerWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      {/* Full-bleed carousel */}
      <div className={styles.carouselWrap}>
        <div ref={scrollRef} className={styles.carousel}>
          {PARTNERS.map((partner) => (
            <div key={partner.id} className={styles.item}>
              <PartnerCard partner={partner} />
            </div>
          ))}
        </div>
      </div>

      {/* Constrained controls */}
      <div className={styles.controlsWrap}>
        <button
          onClick={() => scroll("left")}
          className={styles.arrowBtn}
          aria-label="Scroll left"
        >
          <svg viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => scroll("right")}
          className={styles.arrowBtn}
          aria-label="Scroll right"
        >
          <svg viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>

  );
}
