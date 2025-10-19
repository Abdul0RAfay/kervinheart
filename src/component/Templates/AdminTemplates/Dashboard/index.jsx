import React from 'react';
import StatsCard from '@/component/molecule/StatsCard';
import { FaUsers, FaBookOpen, FaCalendarAlt, FaChartLine } from 'react-icons/fa';
import styles from './Dashboard.module.css';

const DashboardPageTemplate = () => {
  // Sample stats data - replace with actual data from your API/store
  const statsData = [
    {
      title: 'Active Users',
      value: '2,401',
      change: '15%',
      changeType: 'positive',
      icon: FaUsers,
      contextText: 'vs last month'
    },
    {
      title: 'Total Courses',
      value: '156',
      change: '8%',
      changeType: 'positive',
      icon: FaBookOpen,
      contextText: 'vs last month'
    },
    {
      title: 'Sessions',
      value: '1,234',
      change: '3%',
      changeType: 'negative',
      icon: FaCalendarAlt,
      contextText: 'vs last month'
    },
    {
      title: 'Completion Rate',
      value: '89%',
      change: '5%',
      changeType: 'positive',
      icon: FaChartLine,
      contextText: 'vs last month'
    }
  ];

  // Quick Tasks data
  const quickTasks = [
    { 
      id: 1, 
      title: 'Review Assignments', 
      description: '12 pending submissions',
      buttonText: 'Review',
      buttonType: 'filled'
    },
    { 
      id: 2, 
      title: 'Respond to Messages', 
      description: '8 unread messages',
      buttonText: 'Reply',
      buttonType: 'outlined'
    },
    { 
      id: 3, 
      title: 'Schedule Sessions', 
      description: '3 appointments pending',
      buttonText: 'Schedule',
      buttonType: 'outlined'
    },
    { 
      id: 4, 
      title: 'User Feedback', 
      description: '5 new reviews',
      buttonText: 'Address',
      buttonType: 'filled'
    },
    { 
      id: 5, 
      title: 'Content Updates', 
      description: '2 articles need review',
      buttonText: 'Review',
      buttonType: 'outlined'
    }
  ];

  // Recent Activity data
  const recentActivities = [
    { id: 1, user: 'Sarah Johnson', action: 'completed Advanced Mindfulness course', time: '2 hours ago' },
    { id: 2, user: 'Mike Chen', action: 'submitted reflection assignment', time: '3 hours ago' },
    { id: 3, user: 'Emma Wilson', action: 'started new meditation session', time: '4 hours ago' },
    { id: 4, user: 'David Brown', action: 'completed breathing exercise', time: '6 hours ago' },
    { id: 5, user: 'Lisa Garcia', action: 'joined stress management program', time: '1 day ago' }
  ];

  return (
    <div className={styles.dashboardContainer}>
      {/* Stats Cards Row */}
      <div className={styles.statsRow}>
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
            icon={stat.icon}
            contextText={stat.contextText}
          />
        ))}
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        {/* Quick Tasks */}
        <div className={styles.quickTasks}>
          <div className={styles.sectionHeader}>
            <div className={styles.headerContent}>
              <h3 className={styles.sectionTitle}>Quick Tasks</h3>
              <p className={styles.sectionSubtitle}>Tasks that need your attention</p>
            </div>
          </div>
          <div className={styles.tasksList}>
            {quickTasks.map((task) => (
              <div key={task.id} className={styles.taskItem}>
                <div className={styles.taskContent}>
                  <h4 className={styles.taskTitle}>{task.title}</h4>
                  <p className={styles.taskDescription}>{task.description}</p>
                </div>
                <button className={`${styles.taskButton} ${styles[task.buttonType]}`}>
                  {task.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className={styles.recentActivity}>
          <div className={styles.activityHeader}>
            <h3 className={styles.activityTitle}>Recent Activity</h3>
            <p className={styles.activitySubtitle}>Latest user actions and system events</p>
          </div>
          <div className={styles.activityList}>
            {recentActivities.map((activity, index) => (
              <div key={activity.id}>
                <div className={styles.activityItem}>
                  <div className={styles.activityText}>
                    <span className={styles.userName}>{activity.user}</span>
                    <span className={styles.action}>{activity.action}</span>
                  </div>
                  <div className={styles.activityTime}>{activity.time}</div>
                </div>
                {index < recentActivities.length - 1 && <div className={styles.activitySeparator}></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPageTemplate;