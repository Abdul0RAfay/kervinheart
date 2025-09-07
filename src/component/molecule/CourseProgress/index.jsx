import React from 'react';
import styles from './CourseProgress.module.css';

const CourseProgress = ({ 
  completionPercentage = 40, 
  progressItems = [
    { label: 'Progress', percentage: 20, color: '#6c5ce7' },
    { label: 'Summary', percentage: 9.5, color: '#3742fa' },
    { label: 'Status', percentage: 10.5, color: '#2f3542' }
  ]
}) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (completionPercentage / 100) * circumference;

  return (
    <div className={styles.courseProgress}>
      <h3>Course Progress</h3>
      
      <div className={styles.progressContainer}>
        <div className={styles.donutChart}>
          <svg width="140" height="140" className={styles.chart}>
            <circle
              cx="70"
              cy="70"
              r={radius}
              fill="none"
              stroke="#e9ecef"
              strokeWidth="12"
            />
            <circle
              cx="70"
              cy="70"
              r={radius}
              fill="none"
              stroke="#6c5ce7"
              strokeWidth="12"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transform="rotate(-90 70 70)"
            />
          </svg>
          <div className={styles.percentageText}>
            {completionPercentage}%
          </div>
          <div className={styles.completionText}>
            Course completion
          </div>
        </div>
        
        <div className={styles.legend}>
          {progressItems.map((item, index) => (
            <div key={index} className={styles.legendItem}>
              <div 
                className={styles.legendColor} 
                style={{ backgroundColor: item.color }}
              />
              <span className={styles.legendLabel}>{item.label}</span>
              <span className={styles.legendPercentage}>{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseProgress;
