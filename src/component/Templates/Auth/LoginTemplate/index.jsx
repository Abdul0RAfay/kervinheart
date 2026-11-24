"use client";

import Link from "next/link";
import AuthWrapper from "@/component/atoms/AuthWrapper";
import classes from "./LoginTemplate.module.css";
import { useFormik } from "formik";
import { loginFormValues } from "@/formik/initialValues";
import { loginSchema } from "@/formik/schema";
import { useRouter } from "next/navigation";
import useAxios from "@/interceptor/axiosInterceptor";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Input from "@/component/atoms/Input/Input";
import Button from "@/component/atoms/Button";
import RenderToast from "@/component/atoms/RenderToast";
import { mergeClass } from "@/resources/utils/helper";

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
    console.log("values0", values);
    RenderToast({
      type: "success",
      message: "Login successful! Welcome back.",
    });
  };

  return (
    <AuthWrapper title="Let the Journey Begin!" description="Unlock a world of education with a single click!" image={"/images/app-images/auth.png"}>
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
            <Link href="/forgot-password" className={classes.forgotPassword}>
              Forgot password?
            </Link>
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
              leftIcon={<FcGoogle />}
            />
          </div>

          <div className={classes.signupLink}>
            <p>
              Don't have an account?{" "}
              <Link href="/sign-up" className={classes.signupText}>
                Sign up here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default LoginTemplate;
