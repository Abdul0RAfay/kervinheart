import React from 'react';
import classes from './Status.module.css';

const Status = ({ status = 'paid', children }) => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return classes.paid;
      case 'pending':
        return classes.pending;
      case 'overdue':
        return classes.overdue;
      case 'cancelled':
        return classes.cancelled;
      default:
        return classes.paid;
    }
  };

  return (
    <span className={`${classes.status} ${getStatusClass(status)}`}>
      {children || status}
    </span>
  );
};

export default Status;
