"use client";

import AuthWrapper from "@/component/atoms/AuthWrapper";
import classes from "./ResetPasswordTemplate.module.css";
import { useFormik } from "formik";
import { resetPasswordFormValues } from "@/formik/initialValues";
import { resetPasswordSchema } from "@/formik/schema";
import { useRouter } from "next/navigation";
import useAxios from "@/interceptor/axiosInterceptor";
import { useState } from "react";
import Input from "@/component/atoms/Input/Input";
import Button from "@/component/atoms/Button";
import RenderToast from "@/component/atoms/RenderToast";
import { mergeClass } from "@/resources/utils/helper";

const ResetPasswordTemplate = () => {
  const router = useRouter();
  const { Post } = useAxios();
  const [loading, setLoading] = useState("");

  const resetPasswordFormik = useFormik({
    initialValues: resetPasswordFormValues,
    validationSchema: resetPasswordSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    console.log("reset password values", values);
    RenderToast({
      type: "success",
      message: "Password reset successfully! You can now log in with your new password.",
    });
    // Navigate to login page
  };

  return (
    <AuthWrapper 
      title="Reset Your Password" 
      description="Create a new password for your account." 
      image={"/images/app-images/auth.png"}
    >
      <div className={classes.resetPasswordCard}>
        <form onSubmit={resetPasswordFormik.handleSubmit} className={classes.resetPasswordForm}>
          <h2 className={mergeClass("fs-50 fw-600", classes.formTitle)}>New Password</h2>
          
          <div className={classes.descriptionText}>
            <p>
              Please enter your new password below. Make sure it's secure and easy to remember.
            </p>
          </div>
          
          <div className={classes.inputGroup}>
            <Input
              label="New Password"
              type="password"
              placeholder="••••••••"
              value={resetPasswordFormik.values.password}
              setValue={(val) => {
                resetPasswordFormik.setFieldValue("password", val);
              }}
              errorText={resetPasswordFormik.touched.password && resetPasswordFormik.errors.password}
            />
          </div>

          <div className={classes.inputGroup}>
            <Input
              label="Confirm New Password"
              type="password"
              placeholder="••••••••"
              value={resetPasswordFormik.values.confirmPassword}
              setValue={(val) => {
                resetPasswordFormik.setFieldValue("confirmPassword", val);
              }}
              errorText={resetPasswordFormik.touched.confirmPassword && resetPasswordFormik.errors.confirmPassword}
            />
          </div>

          {/* <div className={classes.passwordRequirements}>
            <h4>Password Requirements:</h4>
            <ul>
              <li>At least 8 characters long</li>
              <li>Contains uppercase and lowercase letters</li>
              <li>Contains at least one number</li>
              <li>Contains at least one special character</li>
            </ul>
          </div> */}

          <div className={classes.resetButton}>
            <Button
              label={loading === "submitReset" ? "Updating..." : "Update Password"}
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

export default ResetPasswordTemplate;
