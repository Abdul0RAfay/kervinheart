import React from "react";
import { LuArrowDownRight, LuArrowUpRight } from "react-icons/lu";
import styles from "./StatsCard.module.css";

const StatsCard = ({
  title,
  value,
  change,
  changeType = "positive", // 'positive' | 'negative'
  icon: Icon,
  contextText = "vs last month",
}) => {
  const positive = changeType === "positive";

  return (
    <div className={styles.statsCard}>
      <div className={styles.top}>
        <h3 className={styles.title}>{title}</h3>
        {Icon && (
          <span className={styles.iconWrap}>
            <Icon className={styles.icon} aria-hidden="true" />
          </span>
        )}
      </div>

      <div className={styles.value}>{value}</div>

      {change && (
        <div className={styles.changeSection}>
          <span className={`${styles.changePill} ${positive ? styles.positive : styles.negative}`}>
            {positive ? <LuArrowUpRight /> : <LuArrowDownRight />}
            {change}
          </span>
          <span className={styles.contextText}>{contextText}</span>
        </div>
      )}
    </div>
  );
};

export default StatsCard;
