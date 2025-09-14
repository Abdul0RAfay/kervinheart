"use client";
import React from "react";
import classes from "./JournalCard.module.css";
import { FiUpload } from "react-icons/fi";
import { 
  FaSun, 
  FaSadTear, 
  FaHeart, 
  FaSmile, 
  FaMeh, 
  FaStar 
} from "react-icons/fa";

const JournalCard = ({ 
  entry, 
  onClick 
}) => {
  const { 
    id, 
    title, 
    date, 
    feeling, 
    content, 
    tags = [] 
  } = entry;

  // Get feeling icon and color based on feeling type
  const getFeelingConfig = (feeling) => {
    switch (feeling.toLowerCase()) {
      case 'great':
        return { icon: <FaStar />, color: 'great' };
      case 'happy':
        return { icon: <FaSmile />, color: 'happy' };
      case 'good':
        return { icon: <FaSun />, color: 'good' };
      case 'okay':
        return { icon: <FaMeh />, color: 'okay' };
      case 'low':
        return { icon: <FaSadTear />, color: 'low' };
      case 'grateful':
        return { icon: <FaHeart />, color: 'grateful' };
      default:
        return { icon: <FaMeh />, color: 'okay' };
    }
  };

  const feelingConfig = getFeelingConfig(feeling);

  return (
    <div className={classes.journalCard} onClick={() => onClick?.(entry)}>
      <div className={classes.cardHeader}>
        <div className={classes.dateTitle}>
          <span className={classes.date}>{date}</span>
          <h3 className={classes.title}>{title}</h3>
        </div>
        <div className={classes.headerRight}>
          <button 
            className={`${classes.feelingButton} ${classes[feelingConfig.color]}`}
            type="button"
          >
            {feelingConfig.icon}
            <span>{feeling}</span>
          </button>
          <button className={classes.uploadButton} type="button">
            <FiUpload />
          </button>
        </div>
      </div>
      
      <div className={classes.cardBody}>
        <p className={classes.content}>
          {content}
        </p>
        
        {tags.length > 0 && (
          <div className={classes.tagsContainer}>
            {tags.map((tag, index) => (
              <span key={index} className={classes.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JournalCard;
