import React from 'react';
import styles from './StressRelease.module.css';

const StressRelease = ({ 
  title = "10-Minute Stress Release",
  description = "Unwind and release tension with this calming guided meditation.",
  imageUrl = "/api/placeholder/300/200",
  onPlay
}) => {
  return (
    <div className={styles.stressRelease}>
      <div className={styles.meditationImage}>
        <img src={imageUrl} alt="Meditation" />
      </div>
      
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
        
        <button 
          className={styles.playButton}
          onClick={onPlay}
        >
          <span className={styles.playIcon}>▶️</span>
          <span>Play Now</span>
        </button>
      </div>
    </div>
  );
};

export default StressRelease;
