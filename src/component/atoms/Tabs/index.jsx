import React from "react";
import styles from "./Tabs.module.css";

const Tabs = ({ tabs = [], activeTab, onTabChange }) => {
  return (
    <div className={styles.tabsContainer} role="tablist">
      {tabs.map((tab) => {
        const selected = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={selected}
            className={`${styles.tab} ${selected ? styles.activeTab : ""}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
