import React from 'react';
import styles from './SelectedCourseCard.module.css';
import { FaEdit } from 'react-icons/fa';

const SelectedCourseCard = ({ 
  course, 
  onEdit,
  onPreview 
}) => {
  if (!course) {
    return (
      <div className={styles.selectedCourseCard}>
        <div className={styles.emptyState}>
          <p>Select a course to view details</p>
        </div>
      </div>
    );
  }

  const {
    title,
    duration,
    level,
    assessments,
    lessons,
    modules,
    completion,
    certificate,
    price,
    created,
    modified
  } = course;

  return (
    <div className={styles.selectedCourseCard}>
      <div className={styles.cardHeader}>
        <h2 className={styles.sectionTitle}>Course Details</h2>
        <button className={styles.editButton} onClick={() => onEdit && onEdit(course)}>
          <FaEdit className={styles.editIcon} />
        </button>
      </div>

      <div className={styles.courseDetails}>
        <h3 className={styles.courseTitle}>{title}</h3>
        
        {/* Course Info Grid */}
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Duration</span>
            <span className={styles.infoValue}>{duration}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Level</span>
            <span className={styles.infoValue}>{level}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Assessments</span>
            <span className={styles.infoValue}>{assessments}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Lessons</span>
            <span className={styles.infoValue}>{lessons}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Modules</span>
            <span className={styles.infoValue}>{modules}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Modules</span>
            <span className={styles.infoValue}>{modules}</span>
          </div>
        </div>

        {/* Completion Rate */}
        <div className={styles.completionSection}>
          <div className={styles.completionHeader}>
            <span className={styles.completionLabel}>Completion Rate</span>
            <span className={styles.completionPercentage}>{completion}%</span>
          </div>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${completion}%` }}
            ></div>
          </div>
        </div>

        {/* Additional Details */}
        <div className={styles.additionalDetails}>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Certificate:</span>
            <span className={styles.detailValue}>{certificate}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Price:</span>
            <span className={styles.detailValue}>{price}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Created:</span>
            <span className={styles.detailValue}>{created}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Modified:</span>
            <span className={styles.detailValue}>{modified}</span>
          </div>
        </div>

        {/* Preview Button */}
        <button className={styles.previewButton} onClick={() => onPreview && onPreview(course)}>
          Preview Course
        </button>
      </div>
    </div>
  );
};

export default SelectedCourseCard;
