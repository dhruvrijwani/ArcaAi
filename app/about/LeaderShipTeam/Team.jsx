import FinalCta from '@/app/Components/FinalCta/FinalCta'
import LeadershipCards from '@/app/Components/Leadership/LeadershipCard'
import React from 'react'
import styles from './team.module.css'
import { leadershipData } from './leadershipdata'

function Team() {
    
  return (
        <section className={styles.TeamSection}>
          <div className="swcontainer">
            <div className={styles.sectionWrapper}>
                <h2 className={styles.title}>Leadership Team</h2>
                <p className={styles.description}>
                    ARCA AI is led by experts across medicine, enterprise technology, data science, and public health.
                </p>
                <p className={styles.description}>
                    Together, they bring more than 150 years of combined experience in building trustworthy, scalable, and clinically meaningful systems.
                </p>
    
                <section className={styles.leaderssection}>
                  <div className={styles.grid}>
                    {leadershipData.map((leader, index) => {
                      const isCenterCard = index % 3 === 1;

                      return (
                        <LeadershipCards
                          key={leader.id}
                          image={leader.image}
                          name={leader.name}
                          description={leader.description}
                          designation={leader.designation}
                          isFeatured={isCenterCard}
                        />
                      );
                    })}
                  </div>
                </section>

                <div className={styles.ctasection}>
                  <FinalCta />
                </div>

            </div>
          </div>
        </section>
  )
}

export default Team