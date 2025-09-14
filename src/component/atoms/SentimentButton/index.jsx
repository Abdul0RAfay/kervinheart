"use client";
import React from "react";
import classes from "./SentimentButton.module.css";
import { 
  FaSun, 
  FaSadTear, 
  FaHeart, 
  FaSmile, 
  FaMeh, 
  FaStar 
} from "react-icons/fa";

const SentimentButton = ({ 
  feeling, 
  isSelected = false, 
  onClick,
  variant = "default"
}) => {
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
    <button
      type="button"
      className={`${classes.sentimentButton} ${classes[feelingConfig.color]} ${
        isSelected ? classes.selected : ""
      }`}
      onClick={() => onClick?.(feeling)}
      data-variant={variant}
    >
      {feelingConfig.icon}
      <span>{feeling}</span>
    </button>
  );
};

export default SentimentButton;
