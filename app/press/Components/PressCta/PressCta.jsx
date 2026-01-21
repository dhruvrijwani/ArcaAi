import React from 'react'
import styles from './PressCta.module.css'
import Img from '@/public/testimonialsimage.webp'
import Image from 'next/image'

function PressCta() {
  return (
    <section className={styles.PressCtaSection}>
        <div className={styles.leftinfo}>
            <h2 className={styles.title}>Media <span className={styles.bold}>Contact</span>
            </h2>
            <p className={styles.desc}>For interviews, briefings, or speaking requests, reach out to our communications team.</p>

            <div className={styles.contactBlock}>
                <p className={`${styles.label} ${styles.desc}`}>Press &amp; Media Enquiries</p>
                <a href="mailto:press@arca.ai" className={styles.contactLink}>press@arca.ai</a>
                <a href="tel:+91XXXXXXXXXX" className={styles.contactLink}>+91 XXX XXX XXXX</a>
            </div>

            <div className={styles.followBlock}>
                <p className={`${styles.label} ${styles.desc}`}>Follow ARCA AI</p>

                <ul className={styles.linkList}>
                    <li>
                        <a href="#" className={styles.followLink}>LinkedIn</a>
                    </li>
                    <li>
                    <a href="#" className={styles.followLink}>Research Updates</a>
                    </li>
                    <li>
                    <a href="#" className={styles.followLink}>Product Releases</a>
                    </li>
                    <li>
                    <a href="#" className={styles.followLink}>Thought Leadership</a>
                    </li>
                </ul>
            </div>
        </div>
        
        <div className={styles.rightimg}>
            <div className={styles.imageWrap}>
                <Image
                    src={Img}
                    alt="Cta Image"
                    fill
                    priority
                />
            </div>
        </div>
    </section>
  )
}

export default PressCta