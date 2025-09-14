import React from 'react';
import styles from './CoachingSessionCard.module.css';
import Image from 'next/image';
import { FaClock, FaStar } from 'react-icons/fa';

const CoachingSessionCard = ({ 
  title, 
  duration, 
  rating, 
  sessionsSold, 
  tags, 
  price, 
  timePeriod,
  image 
}) => {
  return (
    <div className={styles.coachingSessionCard}>
      <div className={styles.cardContent}>
        <div className={styles.imageContainer}>
          <Image 
            src={image} 
            alt={title} 
           fill
            className={styles.sessionImage}
          />
        </div>
        
        <div className={styles.sessionDetails}>
          <h3 className={styles.title}>{title}</h3>
          
          <div className={styles.metaInfo}>
            <div className={styles.duration}>
              <FaClock className={styles.clockIcon} />
              <span>Duration: {duration} minutes</span>
            </div>
            
            <div className={styles.rating}>
              <FaStar className={styles.starIcon} />
              <span>Rating {rating}</span>
            </div>
            
            <div className={styles.sessionsSold}>
              <span>{sessionsSold} sessions sold</span>
            </div>
          </div>
          
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className={styles.priceSection}>
        
          <p className={styles.price}>
            {price}
            </p>
            <span>
            {timePeriod}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoachingSessionCard;
