import React from 'react'
import styles from './Partners.module.css'
import PartnerCarousel from '../Components/PartnersCarousel/PartnerCarousel'
import Badge from '../Components/Badge/Badge'

function Partners() {
  return (
    <>
    <section className={styles.Partners}>
        <div className="swcontainer">
        <div className={styles.sectionWrapper}>
            <h2 className={styles.partnersTitle}>Trusted by leaders shaping <br /> the future of healthcare</h2>
            <p className={styles.partnersDescription}>
                ARCA AI collaborates with pioneering institutions, driving clinical excellence, community medicine, and advanced research.
            </p>

            <Badge bgColor="#111" textColor="#C2EA9C">Featured Partners</Badge>

            <div className={styles.partnerCarousel}>
                <PartnerCarousel />
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Partners