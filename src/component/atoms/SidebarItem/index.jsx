"use client";

import React from "react";
import classes from "./SidebarItem.module.css";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SidebarItem = ({ item, isCollapsed }) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === item.link;

  return (
    <div
      onClick={() => {
        router.push(`${item?.link}`);
      }}
      className={`${classes?.item} ${
        isActive && classes?.active
      }`}
    >
      <div className={classes.icon}>
        <Image src={item?.icon} fill alt="icon" />
      </div>
      {/* <item.icon className={classes?.icon} /> */}
      <p className={isCollapsed ? "collapse" : undefined}>{item?.name}</p>
    </div>
  );
};

export default SidebarItem;
