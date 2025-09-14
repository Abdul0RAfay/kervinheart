import React from 'react';
import styles from './SessionTypeSelector.module.css';
import { FaVideo, FaMapMarkerAlt } from 'react-icons/fa';

const SessionTypeSelector = ({ selectedType, onTypeSelect }) => {
  const sessionTypes = [
    {
      id: 'online',
      label: 'Online',
      icon: FaVideo
    },
    {
      id: 'in-person',
      label: 'In-Person',
      icon: FaMapMarkerAlt
    }
  ];

  return (
    <div className={styles.sessionTypeSelector}>
      <h3 className={styles.sessionTypeTitle}>Session Type</h3>
      <div className={styles.typeButtons}>
        {sessionTypes.map((type) => {
          const IconComponent = type.icon;
          const isSelected = selectedType === type.id;
          
          return (
            <button
              key={type.id}
              className={`${styles.typeButton} ${isSelected ? styles.selected : ''}`}
              onClick={() => onTypeSelect(type.id)}
            >
              <IconComponent className={styles.icon} />
              <span>{type.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SessionTypeSelector;
