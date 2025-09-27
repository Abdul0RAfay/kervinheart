import React from 'react';
import styles from './QuickActions.module.css';
import { FaPlay, FaComments, FaUsers } from 'react-icons/fa';

const QuickActions = ({ 
  actions = [
    {
      id: 1,
      icon: 'FaPlay',
      title: 'Start Meditation',
      link: '/meditation'
    },
    {
      id: 2,
      icon: 'FaComments',
      title: 'Message Coach',
      link: '/messages'
    },
    {
      id: 3,
      icon: 'FaUsers',
      title: 'Join Group Session',
      link: '/group-session'
    }
  ]
}) => {
  // Icon mapping function
  const getIcon = (iconName) => {
    const iconMap = {
      'FaPlay': <FaPlay />,
      'FaComments': <FaComments />,
      'FaUsers': <FaUsers />
    };
    return iconMap[iconName] || iconName; // fallback to original if not found
  };
  return (
    <div className={styles.quickActions}>
      
      <div className={styles.actionsGrid}>
        {actions.map((action) => (
          <a 
            key={action.id} 
            href={action.link} 
            className={styles.actionButton}
          >
            <div className={styles.actionIcon}>
              {getIcon(action.icon)}
            </div>
            <span className={styles.actionTitle}>{action.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
