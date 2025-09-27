"use client";
import React, { useState } from 'react';
import classes from './FilterSidebar.module.css';
import { FaChevronDown } from 'react-icons/fa';

const FilterSidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: 'All',
    level: 'All',
    duration: 'All'
  });

  const categories = ['All', 'Leadership', 'Teamwork', 'Innovation', 'Strategy', 'Growth'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const durations = ['All', 'Short (1-4 weeks)', 'Medium (5-8 weeks)', 'Long (9+ weeks)'];

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className={classes.filterSidebar}>
      <div className={classes.filterHeader}>
        <div className={classes.filterTitleContainer}>
          <FaChevronDown className={classes.filterIcon} />
          <h3 className={classes.filterTitle}>Filters</h3>
        </div>
        <span className={classes.caret}>^</span>
      </div>

      <div className={classes.filterSection}>
        <h4 className={classes.sectionTitle}>Category</h4>
        <div className={classes.radioGroup}>
          {categories.map((category) => (
            <label key={category} className={classes.radioLabel}>
              <input
                type="radio"
                name="category"
                value={category}
                checked={filters.category === category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className={classes.radioInput}
              />
              <span className={classes.radioText}>{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={classes.filterDivider}></div>

      <div className={classes.filterSection}>
        <h4 className={classes.sectionTitle}>Level</h4>
        <div className={classes.radioGroup}>
          {levels.map((level) => (
            <label key={level} className={classes.radioLabel}>
              <input
                type="radio"
                name="level"
                value={level}
                checked={filters.level === level}
                onChange={(e) => handleFilterChange('level', e.target.value)}
                className={classes.radioInput}
              />
              <span className={classes.radioText}>{level}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={classes.filterDivider}></div>

      <div className={classes.filterSection}>
        <h4 className={classes.sectionTitle}>Duration</h4>
        <div className={classes.radioGroup}>
          {durations.map((duration) => (
            <label key={duration} className={classes.radioLabel}>
              <input
                type="radio"
                name="duration"
                value={duration}
                checked={filters.duration === duration}
                onChange={(e) => handleFilterChange('duration', e.target.value)}
                className={classes.radioInput}
              />
              <span className={classes.radioText}>{duration}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
