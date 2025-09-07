import React from 'react';
import styles from './QuickActions.module.css';

const QuickActions = ({ 
  actions = [
    {
      id: 1,
      icon: '▶️',
      title: 'Start Meditation',
      link: '/meditation'
    },
    {
      id: 2,
      icon: '💬',
      title: 'Message Coach',
      link: '/messages'
    },
    {
      id: 3,
      icon: '👥',
      title: 'Join Group Session',
      link: '/group-session'
    }
  ]
}) => {
  return (
    <div className={styles.quickActions}>
      <h3>Quick Actions</h3>
      
      <div className={styles.actionsGrid}>
        {actions.map((action) => (
          <a 
            key={action.id} 
            href={action.link} 
            className={styles.actionButton}
          >
            <div className={styles.actionIcon}>
              {action.icon}
            </div>
            <span className={styles.actionTitle}>{action.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
