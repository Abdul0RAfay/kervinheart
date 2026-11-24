import React from "react";
import Image from "next/image";
import { LuFlower2, LuPlay } from "react-icons/lu";
import Button from "@/component/atoms/Button";
import styles from "./StressRelease.module.css";

const StressRelease = ({
  title = "10-Minute Stress Release",
  description = "Unwind and release tension with this calming guided meditation.",
  imageUrl,
  duration = "10 min",
  onPlay,
}) => {
  return (
    <div className={styles.stressRelease}>
      <div className={styles.meditation}>
        <div className={styles.meditationImage}>
          {imageUrl ? (
            <Image fill src={imageUrl} alt="" sizes="72px" />
          ) : (
            <LuFlower2 className={styles.placeholderIcon} aria-hidden="true" />
          )}
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>Recommended · {duration}</span>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      <Button onClick={onPlay} variant="soft" leftIcon={<LuPlay />} label="Play now" />
    </div>
  );
};

export default StressRelease;
