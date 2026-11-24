"use client";
import { usePathname } from "next/navigation";
import { LuLogOut } from "react-icons/lu";
import classes from "./Sidebar.module.css";
import SidebarItem from "@/component/atoms/SidebarItem";
import { adminSidebarData, sidebarData, utilitySidebarData } from "@/developmentContent/enum";

const Sidebar = ({ onNavigate }) => {
  const pathname = usePathname();

  // TODO: derive from the authenticated user's role once auth is wired up
  const role = pathname === "/user" || pathname?.startsWith("/user/") ? "user" : "admin";
  const navItems = role === "admin" ? adminSidebarData : sidebarData;

  return (
    <nav className={classes.Sidebar} aria-label="Main navigation">
      <div className={classes.section}>
        <p className={classes.sectionLabel}>Menu</p>
        <div className={classes.sidebarItem}>
          {navItems.map((item) => (
            <SidebarItem item={item} key={item._id} onNavigate={onNavigate} />
          ))}
        </div>
      </div>

      <div className={classes.footer}>
        <div className={classes.utilityItems}>
          {utilitySidebarData.map((item) => (
            <SidebarItem item={item} key={item._id} onNavigate={onNavigate} />
          ))}
        </div>

        <div className={classes.separator} />

        <button
          type="button"
          onClick={() => {
            // TODO: logout logic
          }}
          className={classes.logout}
        >
          <LuLogOut className={classes.logoutIcon} aria-hidden="true" />
          <span>Log out</span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
