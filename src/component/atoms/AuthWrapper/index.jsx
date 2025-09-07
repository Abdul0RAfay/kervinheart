import React from 'react'
import classes from './AuthWrapper.module.css'
import Image from 'next/image'
const AuthWrapper = ({ children, title, description, image }) => {
  return (
    <div className={classes.authWrapper}>
        <div className={classes.authWrapperLeft}>
            <div className={classes.authWrapperLeftContent}>
                <div className={classes.logoDiv}>
                  <Image src={"/images/app-images/Logo.png"} alt="logo" fill/>
                </div>
                <h1 className="fs-45 fw-700" >{title}</h1>
                <p className='fs-20 fw-400' >{description}</p>
                </div>
                <div className={classes.authWrapperLeftImage}>
                  <Image src={image} alt="logo" fill/>
                </div>
        </div>
        <div className={classes.authWrapperRight}>
                <div className={classes.logoDivMobile}>
                  <Image src={"/images/app-images/Logo.png"} alt="logo" fill/>
                </div>
            {children}
        </div>
    </div>
  )
}

export default AuthWrapper