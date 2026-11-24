import React from "react";
import styles from "./CourseProgress.module.css";

// brand-600 / brand-400 / brand-200
const PALETTE = ["#5b55d6", "#9893f0", "#d9d8fc"];

const CourseProgress = ({
  completionPercentage = 40,
  title = "Course progress",
  progressItems = [
    { label: "Progress", percentage: 20 },
    { label: "Summary", percentage: 9.5 },
    { label: "Status", percentage: 10.5 },
  ],
}) => {
  const size = 132;
  const stroke = 12;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const gap = 4; // visual gap between segments

  // Segments fill the completed share of the ring, proportionally to each item.
  const total = progressItems.reduce((sum, i) => sum + i.percentage, 0) || 1;
  const filled = (completionPercentage / 100) * circumference;
  let offset = 0;
  const segments = progressItems.map((item, index) => {
    const length = (item.percentage / total) * filled;
    const seg = {
      ...item,
      color: PALETTE[index % PALETTE.length],
      dash: `${Math.max(length - gap, 0)} ${circumference}`,
      offset: -offset,
    };
    offset += length;
    return seg;
  });

  return (
    <div className={styles.courseProgress}>
      <div className={styles.head}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.caption}>This month</span>
      </div>

      <div className={styles.progressContainer}>
        <div className={styles.donutChart}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img"
            aria-label={`${completionPercentage}% complete`}>
            <circle cx={size / 2} cy={size / 2} r={radius} fill="none"
              stroke="#f1f3f7" strokeWidth={stroke} />
            {segments.map((s, i) => (
              <circle key={i} cx={size / 2} cy={size / 2} r={radius} fill="none"
                stroke={s.color} strokeWidth={stroke} strokeDasharray={s.dash}
                strokeDashoffset={s.offset} strokeLinecap="round"
                transform={`rotate(-90 ${size / 2} ${size / 2})`} />
            ))}
          </svg>
          <div className={styles.percentageText}>
            <span>{completionPercentage}%</span>
            <small>complete</small>
          </div>
        </div>

        <ul className={styles.legend}>
          {segments.map((item, index) => (
            <li key={index} className={styles.legendItem}>
              <span className={styles.legendColor} style={{ backgroundColor: item.color }} />
              <span className={styles.legendLabel}>{item.label}</span>
              <span className={styles.legendPercentage}>{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseProgress;
