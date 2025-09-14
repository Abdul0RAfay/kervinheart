import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import classes from './DownloadIcon.module.css';

const DownloadIcon = ({ onClick, className }) => {
  return (
    <div 
      className={`${classes.downloadIcon} ${className || ''}`}
      onClick={onClick}
    >
      <FaFilePdf size={20} />
    </div>
  );
};

export default DownloadIcon;
