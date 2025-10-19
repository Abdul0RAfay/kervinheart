"use client";
import { useRouter } from "next/navigation";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Sidebar.module.css";
import SidebarItem from "@/component/atoms/SidebarItem";
import { adminSidebarData, sidebarData, utilitySidebarData } from "@/developmentContent/enum";

const Sidebar = ({ isCollapsed }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  // Get user role from Redux or localStorage
  // const user = useSelector((state) => state.auth.user);
  const role = "admin";

  // Filter sidebar items if needed
  const filteredSidebarData =
    role === "admin"
      ? adminSidebarData // full access
      : sidebarData

  return (
    <div className={classes?.Sidebar}>
      <div className={classes?.sidebarItem}>
        {filteredSidebarData.map((item) => (
          <SidebarItem isCollapsed={isCollapsed} item={item} key={item._id} />
        ))}
      </div>

      <div className={classes?.separator}></div>

      <div className={classes?.utilityItems}>
        {utilitySidebarData.map((item) => (
          <SidebarItem isCollapsed={isCollapsed} item={item} key={item._id} />
        ))}
      </div>

      <div
        onClick={() => {
          // your logout logic
        }}
        className={classes?.logout}
      >
        <IoLogOutOutline className={classes?.logoutIcon} />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
