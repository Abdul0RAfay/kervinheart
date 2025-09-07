"use client";
import Header from "@/component/molecule/Header";
import Sidebar from "@/component/molecule/Sidebar/page";
import { mergeClass } from "@/resources/utils/helper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import classes from "./LayoutWrapper.module.css";

const LayoutWrapper = ({ children }) => {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <div className={classes.child}>
        <div className={classes?.subChild}>
            <div
              className={`${classes?.sidebar} `}
            >
              <div className={classes?.logoParent}>
                <div
                  className={mergeClass("cp", classes?.logo)}
                  onClick={() => router.push("/")}
                >
                  <Image fill src={"/Images/app-images/logo.png"} alt="logo" />
                </div>
                
              </div>
              <Sidebar/>
            </div>
          <div className={classes?.children}>
            <Header />
            <div className={classes?.contentBody}>
            {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutWrapper;
