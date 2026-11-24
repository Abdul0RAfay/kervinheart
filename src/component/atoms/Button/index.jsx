"use client";
import React from "react";
import classes from "./Button.module.css";

/**
 * variant: primary | secondary | ghost | danger | soft
 * size:    sm | md | lg
 */
const Button = ({
  label,
  customStyle,
  onClick,
  disabled = false,
  children,
  leftIcon,
  rightIcon,
  className = "",
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      style={customStyle}
      onClick={onClick}
      disabled={disabled}
      color-variant={variant}
      data-size={size}
      className={`${classes.btn} ${className}`}
      {...props}
    >
      {leftIcon && <span className={classes.icon}>{leftIcon}</span>}
      {label && <span className={classes.label}>{label}</span>}
      {children}
      {rightIcon && <span className={classes.icon}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
