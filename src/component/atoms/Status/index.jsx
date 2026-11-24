import React from "react";
import classes from "./Status.module.css";

const TONES = {
  paid: "success",
  active: "success",
  completed: "success",
  confirmed: "success",
  success: "success",
  pending: "warning",
  "in review": "warning",
  submitted: "info",
  upcoming: "info",
  scheduled: "info",
  "in progress": "info",
  overdue: "danger",
  failed: "danger",
  inactive: "neutral",
  cancelled: "neutral",
  canceled: "neutral",
  draft: "neutral",
};

const Status = ({ status = "paid", children }) => {
  const tone = TONES[String(status).toLowerCase()] || "neutral";

  return (
    <span className={`${classes.status} ${classes[tone]}`}>
      <span className={classes.dot} aria-hidden="true" />
      {children || status}
    </span>
  );
};

export default Status;
