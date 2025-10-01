"use client";

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import classes from './Accordion.module.css';

const Accordion = ({ items, className = '' }) => {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleItem = (index) => {
    const newExpandedItems = new Set(expandedItems);
    if (newExpandedItems.has(index)) {
      newExpandedItems.delete(index);
    } else {
      newExpandedItems.add(index);
    }
    setExpandedItems(newExpandedItems);
  };

  return (
    <div className={`${classes.accordion} ${className}`}>
      {items.map((item, index) => {
        const isExpanded = expandedItems.has(index);
        
        return (
          <div key={index} className={classes.accordionItem}>
            <div 
              className={classes.accordionHeader}
              onClick={() => toggleItem(index)}
            >
              <div className={classes.accordionHeaderContent}>
                <div className={classes.accordionNumber}>
                  {index + 1}
                </div>
                <div className={classes.accordionTitleSection}>
                  <h3 className={classes.accordionTitle}>{item.title}</h3>
                  <p className={classes.accordionSubtitle}>
                    {item.lessonCount} lessons
                  </p>
                </div>
              </div>
              <div className={`${classes.accordionChevron} ${isExpanded ? classes.expanded : ''}`}>
                <FaChevronDown />
              </div>
            </div>
            
            {isExpanded && (
              <div className={classes.accordionContent}>
                {item.description && (
                  <p className={classes.accordionDescription}>{item.description}</p>
                )}
                {item.lessons && item.lessons.length > 0 && (
                  <div className={classes.lessonsList}>
                    {item.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className={classes.lessonItem}>
                        <div className={classes.lessonNumber}>{lessonIndex + 1}</div>
                        <div className={classes.lessonContent}>
                          <h4 className={classes.lessonTitle}>{lesson.title}</h4>
                          {lesson.duration && (
                            <span className={classes.lessonDuration}>{lesson.duration}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
