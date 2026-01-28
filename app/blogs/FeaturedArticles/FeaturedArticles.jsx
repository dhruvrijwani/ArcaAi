'use client'

import styles from './FeaturedArticles.module.css'
import BlogCard from '../Components/BlogCard/BlogCard'
// import blogCards from './blogCards'
import blogCardPresets from './blogCardPresets';
import { useState } from 'react';
import ShapedButton from '@/app/Components/ShapedButton/ShapedButton';


const ITEMS_PER_PAGE = 6;

function FeaturedArticles({ cards }) {

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleToggle = () => {
    if (visibleCount >= cards.length) {
      setVisibleCount(ITEMS_PER_PAGE);
    } else {
      setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
    }
  };


  const isAllVisible = visibleCount >= cards.length;
  return (
    <section className={styles.FeaturedArticles}>
      <div className="swcontainer">
        <div className={styles.sectionWrapper}>
            <h2 className={styles.title}>Featured Articles</h2>

            <div className={styles.blogGrid}>
              {cards.slice(0, visibleCount).map((card, index) => {
                const preset =
                  blogCardPresets[index % blogCardPresets.length];

                return (
                  <BlogCard
                    key={card.id}
                    description={card.description}
                    slug={card.slug}
                    category={card.category}
                    date={card.date}
                    cardBg={preset.cardBg}
                    textColor={preset.textColor}
                  />
                );
              })}
            </div>

            {/* Button */}
          {cards.length > ITEMS_PER_PAGE && (
            <div className={styles.buttonWrapper}>
              {/* <button
                className={styles.toggleButton}
                onClick={handleToggle}
              >
                {isAllVisible ? 'Show less' : 'Show more'}
              </button> */}
              <ShapedButton
                label={isAllVisible ? "Show less" : "Show more"}
                onClick={handleToggle}
              />

              
            </div>
            
          )}

        </div>
      </div>
    </section>
  )
}

export default FeaturedArticles

