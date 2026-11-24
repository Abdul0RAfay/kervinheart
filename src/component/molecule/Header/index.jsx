"use client";
import HeaderRight from "@/component/atoms/HeaderRight/page";
import { pageSubtitles } from "@/developmentContent/enum";
import { usePathname } from "next/navigation";
import { LuMenu } from "react-icons/lu";
import classes from "./Header.module.css";

const toTitle = (segment = "") =>
  segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const getHeading = (path = "") => {
  const segments = path.split("/").filter(Boolean);
  // "/user/journal" -> "journal", "/users" -> "users"
  const key = segments[0] === "user" ? segments[1] || "dashboard" : segments[0] || "dashboard";

  if (key === "dashboard") {
    return { title: "Welcome back, User", subtitle: pageSubtitles.dashboard };
  }
  return { title: toTitle(key), subtitle: pageSubtitles[key] };
};

const Header = ({ onMenuClick }) => {
  const pathname = usePathname();
  const { title, subtitle } = getHeading(pathname);

  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <button
          type="button"
          className={classes.menuBtn}
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <LuMenu />
        </button>
        <div className={classes.titles}>
          <h1 className={classes.title}>{title}</h1>
          {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
        </div>
      </div>
      <HeaderRight />
    </header>
  );
};

export default Header;
