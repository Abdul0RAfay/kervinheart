import React from 'react';
import styles from './StressRelease.module.css';
import Button from '@/component/atoms/Button';
import Image from 'next/image';

const StressRelease = ({ 
  title = "10-Minute Stress Release",
  description = "Unwind and release tension with this calming guided meditation.",
  imageUrl = "/api/placeholder/300/200",
  onPlay
}) => {
  return (
    <div className={styles.stressRelease}>
      <div className={styles.meditation}>
      <div className={styles.meditationImage}>
        <Image fill src={imageUrl} alt="Meditation" />
      </div>
      
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
      </div>

      <Button 
          className={styles.playButton}
          onClick={onPlay}
          variant={"primary"}
          leftIcon={"▶️"}
        label={"Play Now"}
        />
         
    </div>
  );
};

export default StressRelease;
