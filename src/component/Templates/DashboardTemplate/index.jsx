"use client";

import React from "react";
import SessionCard from "@/component/molecule/SessionCard";
import CourseProgress from "@/component/molecule/CourseProgress";
import QuickActions from "@/component/molecule/QuickActions";
import QuickJournalEntry from "@/component/molecule/QuickJournalEntry";
import AssignmentList from "@/component/molecule/AssignmentList";
import StressRelease from "@/component/molecule/StressRelease";
import styles from "./DashboardTemplate.module.css";

const DashboardTemplate = () => {
  const handleJournalSubmit = (entry) => {
    console.log("Journal entry submitted:", entry);
  };

  const handleMeditationPlay = () => {
    console.log("Starting meditation...");
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.leftCol}>
        <SessionCard
          coachName="Kervin Heart"
          coachTitle="Meditation Coach"
          sessionTime="12:00 PM EST"
          isAddedToCalendar
        />
        <CourseProgress
          completionPercentage={40}
          progressItems={[
            { label: "Progress", percentage: 20 },
            { label: "Summary", percentage: 9.5 },
            { label: "Status", percentage: 10.5 },
          ]}
        />
        <StressRelease
          title="10-Minute Stress Release"
          description="Unwind and release tension with this calming guided meditation."
          onPlay={handleMeditationPlay}
        />
      </div>

      <div className={styles.rightCol}>
        <div className={styles.rightColHead}>
          <QuickJournalEntry
            question="What's on your mind today?"
            placeholder="Type anything..."
            onSubmit={handleJournalSubmit}
          />
          <QuickActions
            actions={[
              { id: 1, icon: "FaPlay", title: "Start Meditation", link: "/user/meditations" },
              { id: 2, icon: "FaComments", title: "Message Coach", link: "/messages" },
              { id: 3, icon: "FaUsers", title: "Join Group Session", link: "/group-session" },
            ]}
          />
        </div>
        <AssignmentList />
      </div>
    </div>
  );
};

export default DashboardTemplate;
