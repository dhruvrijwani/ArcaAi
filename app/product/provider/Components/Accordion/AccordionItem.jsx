'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Accordion.module.css';

export default function AccordionItem({
  title,
  children,
  isOpen,
  onToggle,
}) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
      });
    }
  }, [isOpen]);

  return (
    <div className={styles.card}>
      <button className={styles.header} onClick={onToggle}>
        <span>{title}</span>
        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
      </button>

      <div ref={contentRef} className={styles.content}>
        {children}
      </div>
    </div>
  );
}
