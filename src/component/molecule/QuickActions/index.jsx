import React from "react";
import Link from "next/link";
import { LuMessageSquare, LuPlay, LuUsers } from "react-icons/lu";
import styles from "./QuickActions.module.css";

const ICONS = {
  FaPlay: LuPlay,
  FaComments: LuMessageSquare,
  FaUsers: LuUsers,
};

const QuickActions = ({
  actions = [
    { id: 1, icon: "FaPlay", title: "Start Meditation", link: "/meditation" },
    { id: 2, icon: "FaComments", title: "Message Coach", link: "/messages" },
    { id: 3, icon: "FaUsers", title: "Join Group Session", link: "/group-session" },
  ],
}) => {
  return (
    <div className={styles.quickActions}>
      <div className={styles.actionsGrid}>
        {actions.map((action) => {
          const Icon = ICONS[action.icon];
          return (
            <Link key={action.id} href={action.link} className={styles.actionButton}>
              <span className={styles.actionIcon}>{Icon ? <Icon /> : action.icon}</span>
              <span className={styles.actionTitle}>{action.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
