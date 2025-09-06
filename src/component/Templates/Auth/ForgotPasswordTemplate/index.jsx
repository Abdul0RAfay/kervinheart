"use client";

import AuthWrapper from "@/component/atoms/AuthWrapper";
import classes from "./ForgotPasswordTemplate.module.css";
import { useFormik } from "formik";
import { forgotPasswordFormValues } from "@/formik/initialValues";
import { forgotPasswordSchema } from "@/formik/schema";
import { useRouter } from "next/navigation";
import useAxios from "@/interceptor/axiosInterceptor";
import { useState } from "react";
import Input from "@/component/atoms/Input/Input";
import Button from "@/component/atoms/Button";
import RenderToast from "@/component/atoms/RenderToast";
import { mergeClass } from "@/resources/utils/helper";

const ForgotPasswordTemplate = () => {
  const router = useRouter();
  const { Post } = useAxios();
  const [loading, setLoading] = useState("");

  const forgotPasswordFormik = useFormik({
    initialValues: forgotPasswordFormValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    console.log("forgot password values", values);
    RenderToast({
      type: "success",
      message: "Password reset link sent to your email!",
    });
    // Navigate to verify OTP page or show success message
  };

  return (
    <AuthWrapper 
      title="Forgot Password?" 
      description="No worries! Enter your email and we'll send you a reset link." 
      image={"/images/app-images/auth.png"}
    >
      <div className={classes.forgotPasswordCard}>
        <form onSubmit={forgotPasswordFormik.handleSubmit} className={classes.forgotPasswordForm}>
          <h2 className={mergeClass("fs-50 fw-600", classes.formTitle)}>Reset Password</h2>
          
          <div className={classes.descriptionText}>
            <p>
              Enter your email address and we'll send you a verification code to reset your password.
            </p>
          </div>
          
          <div className={classes.inputGroup}>
            <Input
              label="Email address"
              placeholder="john.doe@gmail.com"
              value={forgotPasswordFormik.values.email}
              setValue={(val) => {
                forgotPasswordFormik.setFieldValue("email", val);
              }}
              errorText={forgotPasswordFormik.touched.email && forgotPasswordFormik.errors.email}
            />
          </div>

          <div className={classes.resetButton}>
            <Button
              label={loading === "submitReset" ? "Sending..." : "Send Reset Link"}
              variant="primary"
              type="submit"
              disabled={loading === "submitReset"}
            />
          </div>

          <div className={classes.backToLogin}>
            <p>
              Remember your password?{" "}
              <span className={classes.loginText}>
                Back to Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default ForgotPasswordTemplate;
