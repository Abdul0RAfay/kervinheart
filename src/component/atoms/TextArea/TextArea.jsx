import React from "react";
import classes from "./TextArea.module.css";
import PropTypes from "prop-types";

export function TextArea({
  value,
  setter,
  label,
  placeholder,
  customStyle,
  labelStyle,
  rows = 3,
  className = "",
  containerClass = "",
  disabled,
  labelClass,
  errorText,
  variant = "",
  inputStyle,
  ...props
}) {
  return (
    <div 
      className={[classes.textAreaBox, containerClass].join(" ")}
      data-variant={variant}
    >
      {label && (
        <label
          style={{ ...labelStyle }}
          className={`${[
            disabled && classes.labelDisabled,
            classes.label,
            labelClass,
          ].join(" ")}`}
        >
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        value={value}
        style={{ ...customStyle, ...inputStyle }}
        onChange={(e) => {
          setter(e.target.value);
        }}
        // onBlur={() => {
        //   setter(value?.trim());
        // }}
        className={className}
        rows={rows}
        disabled={disabled}
        {...props}
      />
      {errorText && (
        <p
          className={`mt-1 ${[classes.errorText].join(" ")}`}
        >{`*${errorText}`}</p>
      )}
    </div>
  );
}
TextArea.propTypes = {
  value: PropTypes.string,
  setter: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  customStyle: PropTypes.object,
  labelStyle: PropTypes.object,
};
