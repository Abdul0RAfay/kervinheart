"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./SidebarItem.module.css";

const SidebarItem = ({ item, onNavigate }) => {
  const pathname = usePathname();
  const isActive =
    pathname === item.link || (item.link !== "/" && pathname?.startsWith(`${item.link}/`));
  const Icon = item?.icon;

  return (
    <Link
      href={item?.link || "#"}
      onClick={onNavigate}
      className={`${classes.item} ${isActive ? classes.active : ""}`}
      aria-current={isActive ? "page" : undefined}
    >
      {Icon && <Icon className={classes.icon} aria-hidden="true" />}
      <span className={classes.label}>{item?.name}</span>
    </Link>
  );
};

export default SidebarItem;
