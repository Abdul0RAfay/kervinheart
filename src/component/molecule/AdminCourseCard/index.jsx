import React from 'react';
import styles from './AdminCourseCard.module.css';
import { FaBookOpen, FaUsers, FaStar, FaEllipsisV } from 'react-icons/fa';

const AdminCourseCard = ({ 
  course, 
  onClick, 
  onEdit,
  onOptions 
}) => {
  const {
    title,
    description,
    lessons,
    weeks,
    level,
    enrolled,
    completion,
    rating
  } = course;

  return (
    <div className={styles.courseCard} onClick={() => onClick && onClick(course)}>
      {/* Left accent line */}
      <div className={styles.accentLine}></div>
      
      {/* Icon container */}
      <div className={styles.iconContainer}>
        <FaBookOpen className={styles.bookIcon} />
      </div>

      {/* Course content */}
      <div className={styles.courseContent}>
        <div className={styles.courseHeader}>
          <h3 className={styles.courseTitle}>{title}</h3>
          <button 
            className={styles.optionsButton}
            onClick={(e) => {
              e.stopPropagation();
              onOptions && onOptions(course);
            }}
          >
            <FaEllipsisV className={styles.optionsIcon} />
          </button>
        </div>

        <p className={styles.courseDescription}>{description}</p>

        {/* Course tags */}
        <div className={styles.tagsContainer}>
          <span className={styles.tag}>{lessons} lessons</span>
          <span className={styles.tag}>{weeks} weeks</span>
          <span className={styles.tag}>{level}</span>
        </div>

        {/* Course statistics */}
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <FaUsers className={styles.statIcon} />
            <span className={styles.statText}>{enrolled} enrolled</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statText}>{completion}% completion</span>
          </div>
          <div className={styles.statItem}>
            <FaStar className={styles.starIcon} />
            <span className={styles.statText}>Rating {rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCourseCard;
