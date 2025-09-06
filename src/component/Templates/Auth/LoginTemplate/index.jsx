"use client";

import AuthWrapper from "@/component/atoms/AuthWrapper";
import classes from "./LoginTemplate.module.css";
import { useFormik } from "formik";
import { loginFormValues } from "@/formik/initialValues";
import { loginSchema } from "@/formik/schema";
import { useRouter } from "next/navigation";
import useAxios from "@/interceptor/axiosInterceptor";
import { useState } from "react";
import Input from "@/component/atoms/Input/Input";
import Button from "@/component/atoms/Button";
import RenderToast from "@/component/atoms/RenderToast";

const LoginTemplate = () => {
  const router = useRouter();
  const { Post } = useAxios();
  const [loading, setLoading] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const loginFormik = useFormik({
    initialValues: loginFormValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    console.log("values", values);
    RenderToast({
      type: "success",
      message: "Login successful! Welcome back.",
    });
  };

  return (
    <AuthWrapper title="Welcome Back" description="Please enter your details" image={"/images/app-images/auth.png"}>
      <div className={classes.loginCard}>
        <form onSubmit={loginFormik.handleSubmit} className={classes.loginForm}>
          <h2 className={classes.formTitle}>Log In</h2>
          
          <div className={classes.inputGroup}>
            <Input
              label="Email address"
              placeholder="shashwat@gmail.com"
              value={loginFormik.values.email}
              setValue={(val) => {
                loginFormik.setFieldValue("email", val);
              }}
              errorText={loginFormik.touched.email && loginFormik.errors.email}
            />
          </div>

          <div className={classes.inputGroup}>
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={loginFormik.values.password}
              setValue={(val) => {
                loginFormik.setFieldValue("password", val);
              }}
              errorText={loginFormik.touched.password && loginFormik.errors.password}
            />
          </div>

          <div className={classes.optionsRow}>
            <label className={classes.rememberMe}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className={classes.checkbox}
              />
              <span className={classes.checkboxLabel}>Remember me</span>
            </label>
            <a href="/forgot-password" className={classes.forgotPassword}>
              Forgot password?
            </a>
          </div>

          <div className={classes.loginButton}>
            <Button
              label={loading === "submitLogin" ? "Please Wait..." : "Log In"}
              variant="primary"
              type="submit"
              disabled={loading === "submitLogin"}
            />
          </div>

          <div className={classes.separator}>
            <span className={classes.separatorText}>or</span>
          </div>

          <div className={classes.socialLogin}>
            <Button
              label="Login with Google"
              variant="secondary"
              leftIcon={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M19.6 10.2273C19.6 9.51818 19.5364 8.83636 19.4182 8.18182H10V12.05H15.3818C15.15 13.3 14.4455 14.3591 13.3864 15.0682V17.5773H16.6182C18.5091 15.8364 19.6 13.2727 19.6 10.2273Z" fill="#4285F4"/>
                  <path d="M10 20C12.7 20 14.9636 19.1045 16.6182 17.5773L13.3864 15.0682C12.4909 15.6682 11.3455 16.0227 10 16.0227C7.65545 16.0227 5.67182 14.4555 4.96818 12.3364H1.63636V14.9409C3.31818 18.3545 6.50909 20 10 20Z" fill="#34A853"/>
                  <path d="M4.96818 12.3364C4.96818 11.95 4.90909 11.5818 4.8 11.2273V8.62273H1.63636C1.63636 9.95 1.63636 11.2273 1.63636 12.3364H4.96818Z" fill="#FBBC05"/>
                  <path d="M10 3.97727C11.4682 3.97727 12.7864 4.48182 13.8227 5.49091L16.7 2.61364C14.9636 0.95 12.7 0 10 0C6.50909 0 3.31818 1.64545 1.63636 5.05909L4.8 7.66364C5.67182 5.54455 7.65545 3.97727 10 3.97727Z" fill="#EA4335"/>
                </svg>
              }
            />
          </div>

          <div className={classes.signupLink}>
            <p>
              Don't have an account?{" "}
              <a href="/signup" className={classes.signupText}>
                Sign up here
              </a>
            </p>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default LoginTemplate;
