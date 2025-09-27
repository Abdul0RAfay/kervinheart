"use client";
import React from 'react';
import classes from './CourseCard.module.css';
import Image from 'next/image';
import { FaStar, FaClock, FaUsers } from 'react-icons/fa';

const CourseCard = ({ 
  data,
  onClick 
}) => {
  return (
    <div className={classes.courseCard} onClick={onClick}>
      <div className={classes.imageContainer}>
        <Image src={data?.image} fill alt={data?.title} className={classes.courseImage} />
        <div className={classes.ratingOverlay}>
          <FaStar className={classes.starIcon} />
          <span className={classes.ratingText}>{data?.rating}</span>
        </div>
      </div>
      
      <div className={classes.cardContent}>
        <div className={classes.titleRow}>
          <h3 className={classes.courseTitle}>{data?.title}</h3>
          <div className={classes.price}>${data?.price}</div>
        </div>
        
        <p className={classes.description}>{data?.description}</p>
        
        <div className={classes.courseDetails}>
          <div className={classes.detailItem}>
            <FaClock className={classes.clockIcon} />
            <span className={classes.detailText}>Duration: {data?.duration} weeks</span>
          </div>
          <div className={classes.detailItem}>
            <FaUsers className={classes.studentsIcon} />
            <span className={classes.detailText}>Students: {data?.students}</span>
          </div>
        </div>
        
        <div className={classes.tags}>
          {data?.tags.map((tag, index) => (
            <span key={index} className={classes.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
