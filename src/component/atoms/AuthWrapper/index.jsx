import React from "react";
import Image from "next/image";
import classes from "./AuthWrapper.module.css";

const AuthWrapper = ({ children, title, description, image }) => {
  return (
    <div className={classes.authWrapper}>
      <aside className={classes.authWrapperLeft}>
        <div className={classes.brandRow}>
          <span className={classes.logoDiv}>
            <Image src="/images/app-images/Logo.png" alt="" fill sizes="40px" />
          </span>
          <span className={classes.brandName}>Kervin Heart</span>
        </div>

        <div className={classes.authWrapperLeftContent}>
          <h1 className={classes.title}>{title}</h1>
          <p className={classes.description}>{description}</p>
        </div>

        {image && (
          <div className={classes.authWrapperLeftImage}>
            <Image src={image} alt="" fill sizes="(max-width: 1200px) 360px, 460px" priority />
          </div>
        )}

        <p className={classes.footnote}>© {new Date().getFullYear()} Kervin Heart</p>
      </aside>

      <main className={classes.authWrapperRight}>
        <div className={classes.logoDivMobile}>
          <Image src="/images/app-images/Logo.png" alt="Kervin Heart" fill sizes="56px" />
        </div>
        {children}
      </main>
    </div>
  );
};

export default AuthWrapper;
