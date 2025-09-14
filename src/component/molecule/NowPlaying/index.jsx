"use client";
import React from 'react';
import classes from './NowPlaying.module.css';
import { FaPlay, FaClock } from 'react-icons/fa';

const NowPlaying = ({ selectedMeditation }) => {
  if (!selectedMeditation) {
    return (
      <div className={classes.nowPlayingContainer}>
        <div className={classes.emptyState}>
          <h4>Now Playing</h4>
          <p>Select a meditation to start your session</p>
        </div>
      </div>
    );
  }

  const { title, duration, tags, transcript } = selectedMeditation;

  return (
    <div className={classes.nowPlayingContainer}>
      <div className={classes.nowPlayingHeader}>
        <FaPlay className={classes.playIcon} />
        <h4>Now Playing</h4>
      </div>

      <div className={classes.mediaPlayer}>
        <div className={classes.playerContainer}>
          <button className={classes.playButton}>
            <FaPlay className={classes.playButtonIcon} />
          </button>
        </div>
      </div>

      <div className={classes.mediaInfo}>
        <h3 className={classes.mediaTitle}>{title}</h3>
        <div className={classes.mediaDuration}>
          <FaClock className={classes.clockIcon} />
          <span>{duration}min</span>
        </div>
      </div>

      <div className={classes.mediaTags}>
        <span className={classes.tagsLabel}>Tags:</span>
        <span className={classes.tagsText}>{tags.join(', ')}</span>
      </div>

      <div className={classes.transcriptSection}>
        <h4 className={classes.transcriptHeader}>Transcript</h4>
        <div className={classes.transcriptContent}>
          <p>
            {transcript || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
