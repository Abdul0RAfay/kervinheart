"use client";

import Image from "next/image";
import { LuBell, LuChevronDown, LuMessageSquare, LuSearch } from "react-icons/lu";
import classes from "./HeaderRight.module.css";

const HeaderRight = () => {
  const user = {
    fullName: "User",
    role: "Member",
    photo: "/images/cms-images/user.jpg",
  };

  return (
    <div className={classes.header}>
      <label className={classes.search}>
        <LuSearch className={classes.searchIcon} aria-hidden="true" />
        <input type="search" placeholder="Search…" aria-label="Search" />
        <kbd className={classes.kbd}>/</kbd>
      </label>

      <button type="button" className={classes.iconBtn} aria-label="Messages">
        <LuMessageSquare />
      </button>
      <button type="button" className={classes.iconBtn} aria-label="Notifications">
        <LuBell />
        <span className={classes.dot} />
      </button>

      <div className={classes.divider} />

      <button type="button" className={classes.profileParent}>
        <span className={classes.profile}>
          <Image className={classes.profileImage} src={user.photo} fill sizes="36px" alt="" />
        </span>
        <span className={classes.profileDetails}>
          <span className={classes.name}>{user.fullName}</span>
          <span className={classes.role}>{user.role}</span>
        </span>
        <LuChevronDown className={classes.chevron} aria-hidden="true" />
      </button>
    </div>
  );
};

export default HeaderRight;
