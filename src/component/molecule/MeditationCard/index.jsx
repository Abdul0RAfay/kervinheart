"use client";
import React from 'react';
import classes from './MeditationCard.module.css';
import { FaClock, FaVideo, FaHeadphones, FaEdit } from 'react-icons/fa';

const MeditationCard = ({ 
  meditation, 
  onClick, 
  isSelected,
  isEdit = false,
  onEdit
}) => {
  const { 
    id, 
    title, 
    duration, 
    type, 
    tags = [] 
  } = meditation;

  const getTypeIcon = (type) => {
    return type === 'Video' ? <FaVideo /> : <FaHeadphones />;
  };

  return (
    <div 
      className={`${classes.meditationCard} ${isSelected ? classes.selected : ''}`}
      onClick={() => onClick?.(meditation)}
    >
      <div className={classes.cardContent}>
        <div className={classes.thumbnailContainer}>
          <div className={classes.thumbnail}>
            {getTypeIcon(type)}
          </div>
        </div>
        
        <div className={classes.meditationDetails}>
          <h3 className={classes.title}>{title}</h3>
          
          <div className={classes.metaInfo}>
            <div className={classes.duration}>
              <FaClock className={classes.clockIcon} />
              <span>{duration} minutes</span>
            </div>
          </div>
          
          <div className={classes.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={classes.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {isEdit && (
          <div className={classes.editButton} onClick={(e) => {
            e.stopPropagation();
            onEdit?.(meditation);
          }}>
            <FaEdit className={classes.editIcon} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MeditationCard;
