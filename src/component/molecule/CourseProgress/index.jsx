import React from 'react';
import styles from './CourseProgress.module.css';

const CourseProgress = ({ 
  completionPercentage = 40, 
  progressItems = [
    { label: 'Progress', percentage: 20, color: '#6c5ce7' },
    { label: 'Summary', percentage: 9.5, color: '#a29bfe' },
    { label: 'Status', percentage: 10.5, color: '#DFDDFF' }
  ]
}) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate cumulative percentages for segment positioning
  let cumulativePercentage = 0;
  const segments = progressItems.map((item, index) => {
    const segmentLength = (item.percentage / completionPercentage) * circumference;
    const strokeDasharray = `${segmentLength} ${circumference}`;
    const strokeDashoffset = -cumulativePercentage;
    cumulativePercentage += segmentLength;
    
    return {
      ...item,
      strokeDasharray,
      strokeDashoffset,
      key: index
    };
  });

  return (
    <div className={styles.courseProgress}>
      <div className={styles.progressContainer}>
        <div className={styles.donutChart}>
          <svg width="180" height="180" className={styles.chart}>
            {/* Background circle */}
            <circle
              cx="90"
              cy="90"
              r={radius}
              fill="none"
              stroke="#DFDDFF"
              strokeWidth="12"
            />
            {/* Progress segments */}
            {segments.map((segment) => (
              <circle
                key={segment.key}
                cx="90"
                cy="90"
                r={radius}
                fill="none"
                stroke={segment.color}
                strokeWidth="12"
                strokeDasharray={segment.strokeDasharray}
                strokeDashoffset={segment.strokeDashoffset}
                strokeLinecap="round"
                transform="rotate(0 70 70)"
              />
            ))}
          </svg>
          <div className={styles.percentageText}>
            {completionPercentage}%
          </div>
          {/* <div className={styles.completionText}>
            Course completion
          </div> */}
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
