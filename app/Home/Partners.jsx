import React from 'react'
import './Partners.css'
import PartnerCarousel from '../Components/PartnersCarousel/PartnerCarousel'
import Badge from '../Components/Badge/Badge'

function Partners() {
  return (
    <>
    <section className="Partners" style={{ backgroundColor: '#111' }}>
        <div className="swcontainer">
        <div className="sectionWrapper">
            <h2 className="partnersTitle">Trusted by leaders shaping <br /> the future of healthcare</h2>
            <p className="partnersDescription">
                ARCA AI collaborates with pioneering institutions, driving clinical excellence, community medicine, and advanced research.
            </p>

            <Badge bgColor="#111" textColor="#C2EA9C">Featured Partners</Badge>

            <div className="partnerCarousel">
                <PartnerCarousel />
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Partners