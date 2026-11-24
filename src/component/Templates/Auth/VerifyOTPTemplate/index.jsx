"use client";

import Link from "next/link";
import AuthWrapper from "@/component/atoms/AuthWrapper";
import classes from "./VerifyOTPTemplate.module.css";
import { useFormik } from "formik";
import { verifyOTPFormValues } from "@/formik/initialValues";
import { verifyOTPSchema } from "@/formik/schema";
import { useRouter } from "next/navigation";
import useAxios from "@/interceptor/axiosInterceptor";
import { useState, useRef, useEffect } from "react";
import Input from "@/component/atoms/Input/Input";
import Button from "@/component/atoms/Button";
import RenderToast from "@/component/atoms/RenderToast";
import { mergeClass } from "@/resources/utils/helper";

const VerifyOTPTemplate = () => {
  const router = useRouter();
  const { Post } = useAxios();
  const [loading, setLoading] = useState("");
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  const verifyOTPFormik = useFormik({
    initialValues: verifyOTPFormValues,
    validationSchema: verifyOTPSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleSubmit = async (values) => {
    console.log("verify OTP values", values);
    RenderToast({
      type: "success",
      message: "OTP verified successfully!",
    });
    // Navigate to reset password page
  };

  const handleOTPChange = (index, value) => {
    if (value.length <= 1) {
      verifyOTPFormik.setFieldValue(`otp${index + 1}`, value);
      
      // Move to next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !verifyOTPFormik.values[`otp${index + 1}`] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendOTP = () => {
    setTimer(60);
    setCanResend(false);
    RenderToast({
      type: "info",
      message: "OTP resent to your email!",
    });
  };

  return (
    <AuthWrapper 
      title="Verify Your Email" 
      description="We've sent a verification code to your email address." 
      image={"/images/app-images/auth.png"}
    >
      <div className={classes.verifyOTPCard}>
        <form onSubmit={verifyOTPFormik.handleSubmit} className={classes.verifyOTPForm}>
          <h2 className={classes.formTitle}>Enter OTP</h2>
          
          <div className={classes.descriptionText}>
            <p>
              Please enter the 6-digit code sent to your email address.
            </p>
          </div>
          
          <div className={classes.otpContainer}>
            {[1, 2, 3, 4, 5, 6].map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                className={classes.otpInput}
                value={verifyOTPFormik.values[`otp${digit}`] || ""}
                onChange={(e) => handleOTPChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                placeholder="0"
              />
            ))}
          </div>

          {verifyOTPFormik.errors.otp && (
            <p className={classes.errorText}>{verifyOTPFormik.errors.otp}</p>
          )}

          <div className={classes.resendContainer}>
            {canResend ? (
              <span className={classes.resendText} onClick={handleResendOTP}>
                Resend OTP
              </span>
            ) : (
              <span className={classes.timerText}>
                Resend OTP in {timer}s
              </span>
            )}
          </div>

          <div className={classes.verifyButton}>
            <Button
              label={loading === "submitVerify" ? "Verifying..." : "Verify OTP"}
              variant="primary"
              type="submit"
              disabled={loading === "submitVerify"}
            />
          </div>

          <div className={classes.backToLogin}>
            <p>
              Didn't receive the code?{" "}
              <Link href="/" className={classes.loginText}>
                Back to Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default VerifyOTPTemplate;
