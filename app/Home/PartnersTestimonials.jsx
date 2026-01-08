import React from 'react'
import styles from './PartnersTestimonials.module.css'
import Button from '../Components/Button/Button'
import Image from 'next/image'
import Img from '../../public/testimonialsimage.webp'

function PartnersTestimonials() {
  return (
    <section className={styles.PartnersTestimonials}>

        {/* Background image layer */}
        <div className={styles.bgWrap} aria-hidden="true">
            <Image
            src={Img}
            alt=""
            fill
            priority
            className={styles.bgImage}
            />
        </div>
          <div className="swcontainer">
            <div className={styles.sectionWrapper}>
                <h2 className={styles.title}>What our partners say</h2>
    
                <div className={styles.testimonials}>
                    <div className={styles.testimonialCard}>
                        <div className={styles.testimonialBrand}>
                            <Image
                            src="/testimonialsimage.webp"
                            alt=""
                            width={70}
                            height={56}
                            />
                        </div>

                        {/* Description */}
                        <p className={styles.testimonialDesc}>
                            “ARCA’s AI meaningfully reduces administrative load while improving accuracy. It’s built with an understanding only clinicians can bring.”
                        </p>

                        {/* Description */}
                        <p className={styles.testimonialAuthor}>
                            — Senior Radiologist, BCMCH
                        </p>

                    </div>
                    <div className={`${styles.testimonialCard} ${styles.rightalign}`}>
                        <div className={styles.testimonialBrand}>
                            <Image
                            src="/testimonialsimage.webp"
                            alt=""
                            width={70}
                            height={56}
                            />
                        </div>

                        {/* Description */}
                        <p className={styles.testimonialDesc}>
                            “Arogya Grid strengthens continuity of care in remote communities—something we’ve struggled with for years.”
                        </p>

                        {/* Description */}
                        <p className={styles.testimonialAuthor}>
                            — Public Health Program Lead
                        </p>

                    </div>
    
                </div>
    
                <Button variant="filled" bgColor="#D6FDFF" textColor="#111">
                  See All Collaborations
                </Button>
    
            </div>
          </div>
    </section>
  )
}

export default PartnersTestimonials