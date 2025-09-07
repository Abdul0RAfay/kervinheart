"use client";
import HeaderRight from "@/component/atoms/HeaderRight/page";
import classes from "./Header.module.css";
import { usePathname } from "next/navigation";
import { mergeClass } from "@/resources/utils/helper";

const formatPathname = (path) => {

  // Handle dashboard path specifically
  if (path === "/dashboard") {
    return "Welcome Back, User";
  }

  const firstPart = path.split("/")[1];

  const formatted = firstPart
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return formatted;
};

const Header = () => {
  const pathname = usePathname();
  console.log("🚀 ~ Header ~ pathname888:", pathname);
  const displayText = formatPathname(pathname);

  return (
    <div className={classes?.header}>
      <div className={mergeClass("fs-40 fw-700",classes?.greet)}>{displayText }</div>
      <HeaderRight />
    </div>
  );
};

export default Header;
