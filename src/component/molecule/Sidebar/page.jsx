"use client";
import { useRouter } from "next/navigation";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import classes from "./Sidebar.module.css";
import SidebarItem from "@/component/atoms/SidebarItem";
import { sidebarData, utilitySidebarData } from "@/developmentContent/enum";

const Sidebar = ({ isCollapsed }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  // const signout = () => {
  //   Cookies.remove("_xpdx");
  //   Cookies.remove("_xpdx_rf");
  //   router.push("/auth/login");
  //   dispatch(signOutRequest());
  // };
  return (
    <div className={classes?.Sidebar}>
      <div className={classes?.sidebarItem}>
        {sidebarData?.map((item) => {
          return (
            <SidebarItem isCollapsed={isCollapsed} item={item} key={item._id} />
          );
        })}
      </div>

      {/* Separator */}
      <div className={classes?.separator}></div>

      {/* Utility Navigation */}
      <div className={classes?.utilityItems}>
        {utilitySidebarData?.map((item) => {
          return (
            <SidebarItem isCollapsed={isCollapsed} item={item} key={item._id} />
          );
        })}
      </div>

      {/* Logout */}
      <div
        onClick={() => {
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
