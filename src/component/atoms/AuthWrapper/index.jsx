import React from 'react'
import classes from './AuthWrapper.module.css'
import Image from 'next/image'
const AuthWrapper = ({ children, title, description, image }) => {
  return (
    <div className={classes.authWrapper}>
        <div className={classes.authWrapperLeft}>
            <div className={classes.authWrapperLeftContent}>
                <h1>{title}</h1>
                <p>{description}</p>
                </div>
                <div className={classes.authWrapperLeftImage}>
            <Image src={image} alt="logo" fill/>
            </div>
        </div>
        <div className={classes.authWrapperRight}>
            {children}
        </div>
    </div>
  )
}

export default AuthWrapper