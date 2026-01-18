'use client'

import styles from './FeaturedArticles.module.css'
import BlogCard from '../Components/BlogCard/BlogCard'
import blogCards from './blogCards'
import blogCardPresets from './blogCardPresets';
import { useState } from 'react';


const ITEMS_PER_PAGE = 6;

function FeaturedArticles() {

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleToggle = () => {
    if (visibleCount >= blogCards.length) {
      // Show less → reset to first 6
      setVisibleCount(ITEMS_PER_PAGE);
    } else {
      // Show more → add next 6
      setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
    }
  };

  const isAllVisible = visibleCount >= blogCards.length;
  return (
    <section className={styles.FeaturedArticles}>
      <div className="swcontainer">
        <div className={styles.sectionWrapper}>
            <h2 className={styles.title}>Featured Articles</h2>

            <div className={styles.blogGrid}>
              {blogCards.slice(0, visibleCount).map((card, index) => {
                const preset =
                  blogCardPresets[index % blogCardPresets.length];

                return (
                  <BlogCard
                    key={card.id}
                    description={card.description}
                    cardBg={preset.cardBg}
                    textColor={preset.textColor}
                  />
                );
              })}
            </div>

            {/* Button */}
          {blogCards.length > ITEMS_PER_PAGE && (
            <div className={styles.buttonWrapper}>
              <button
                className={styles.toggleButton}
                onClick={handleToggle}
              >
                {isAllVisible ? 'Show less' : 'Show more'}
              </button>
              
            </div>
            
          )}

        </div>
      </div>
    </section>
  )
}

export default FeaturedArticles

