import React from 'react';
import styles from './StatsCard.module.css';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const StatsCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'positive', // 'positive' or 'negative'
  icon: Icon,
  contextText = 'vs last month'
}) => {
  return (
    <div className={styles.statsCard}>
      <div className={styles.cardContent}>
        <div className={styles.leftSection}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.value}>{value}</div>
          <div className={styles.changeSection}>
            <div className={styles.changeIndicator}>
              {changeType === 'positive' ? (
                <FaArrowUp className={styles.arrowUp} />
              ) : (
                <FaArrowDown className={styles.arrowDown} />
              )}
              <span className={`${styles.changeText} ${styles[changeType]}`}>
                {change}
              </span>
            </div>
            <span className={styles.contextText}>{contextText}</span>
          </div>
        </div>
        
        <div className={styles.rightSection}>
          {Icon && <Icon className={styles.icon} />}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

