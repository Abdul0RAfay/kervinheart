"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
import classes from "./HeaderRight.module.css";
import { FaChevronDown } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { mediaUrl } from "@/resources/utils/helper";


const HeaderRight = () => {
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  
  const user = {
    fullName: "User",
    photo: "/images/cms-images/user.jpg"
  }
  
  return (
    
    <div className={classes?.header}>
     
      <div
        className={classes.notificationIcon}
      >
        <TiMessages cursor={"pointer"} fontSize={24}/>
      </div>
      <div
        className={classes.notificationIcon}
      >
        <IoMdNotificationsOutline cursor={"pointer"} fontSize={24} />
      </div>
      <div
        className={classes?.profileParent}
      >
        <div className={classes?.profile}>
          <Image
            className={classes?.profileImage}
            src={user?.photo}
            fill
            alt="images"
          />
        </div>
        {/* <div className={classes?.arrow}>
          <IoIosArrowDown />
        </div> */}
      </div>
    </div>
  );
};

export default HeaderRight;
