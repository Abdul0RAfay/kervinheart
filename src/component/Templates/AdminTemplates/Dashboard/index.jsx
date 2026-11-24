import React from "react";
import StatsCard from "@/component/molecule/StatsCard";
import { LuBookOpen, LuCalendar, LuChevronRight, LuTrendingUp, LuUsers } from "react-icons/lu";
import styles from "./Dashboard.module.css";

const statsData = [
  { title: "Active Users", value: "2,401", change: "15%", changeType: "positive", icon: LuUsers },
  { title: "Total Courses", value: "156", change: "8%", changeType: "positive", icon: LuBookOpen },
  { title: "Sessions", value: "1,234", change: "3%", changeType: "negative", icon: LuCalendar },
  { title: "Completion Rate", value: "89%", change: "5%", changeType: "positive", icon: LuTrendingUp },
];

const quickTasks = [
  { id: 1, title: "Review Assignments", description: "12 pending submissions", buttonText: "Review", buttonType: "filled" },
  { id: 2, title: "Respond to Messages", description: "8 unread messages", buttonText: "Reply", buttonType: "outlined" },
  { id: 3, title: "Schedule Sessions", description: "3 appointments pending", buttonText: "Schedule", buttonType: "outlined" },
  { id: 4, title: "User Feedback", description: "5 new reviews", buttonText: "Address", buttonType: "filled" },
  { id: 5, title: "Content Updates", description: "2 articles need review", buttonText: "Review", buttonType: "outlined" },
];

const recentActivities = [
  { id: 1, user: "Sarah Johnson", action: "completed Advanced Mindfulness course", time: "2 hours ago" },
  { id: 2, user: "Mike Chen", action: "submitted reflection assignment", time: "3 hours ago" },
  { id: 3, user: "Emma Wilson", action: "started new meditation session", time: "4 hours ago" },
  { id: 4, user: "David Brown", action: "completed breathing exercise", time: "6 hours ago" },
  { id: 5, user: "Lisa Garcia", action: "joined stress management program", time: "1 day ago" },
];

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

const DashboardPageTemplate = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.statsRow}>
        {statsData.map((stat) => (
          <StatsCard key={stat.title} {...stat} contextText="vs last month" />
        ))}
      </div>

      <div className={styles.bottomSection}>
        <section className={styles.card}>
          <header className={styles.cardHeader}>
            <div>
              <h3 className={styles.cardTitle}>Quick tasks</h3>
              <p className={styles.cardSubtitle}>Things that need your attention</p>
            </div>
            <span className={styles.countBadge}>{quickTasks.length}</span>
          </header>

          <ul className={styles.tasksList}>
            {quickTasks.map((task) => (
              <li key={task.id} className={styles.taskItem}>
                <div className={styles.taskContent}>
                  <h4 className={styles.taskTitle}>{task.title}</h4>
                  <p className={styles.taskDescription}>{task.description}</p>
                </div>
                <button type="button" className={`${styles.taskButton} ${styles[task.buttonType]}`}>
                  {task.buttonText}
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.card}>
          <header className={styles.cardHeader}>
            <div>
              <h3 className={styles.cardTitle}>Recent activity</h3>
              <p className={styles.cardSubtitle}>Latest member actions and events</p>
            </div>
            <button type="button" className={styles.linkButton}>
              View all <LuChevronRight />
            </button>
          </header>

          <ul className={styles.activityList}>
            {recentActivities.map((activity) => (
              <li key={activity.id} className={styles.activityItem}>
                <span className={styles.avatar}>{initials(activity.user)}</span>
                <div className={styles.activityText}>
                  <p>
                    <span className={styles.userName}>{activity.user}</span>{" "}
                    <span className={styles.action}>{activity.action}</span>
                  </p>
                  <span className={styles.activityTime}>{activity.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DashboardPageTemplate;
