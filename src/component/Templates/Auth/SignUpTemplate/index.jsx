"use client";

import AuthWrapper from "@/component/atoms/AuthWrapper";
import classes from "./SignUpTemplate.module.css";
import { useFormik } from "formik";
import { signupFormValues } from "@/formik/initialValues";
import { signupSchema } from "@/formik/schema";
import { useRouter } from "next/navigation";
import useAxios from "@/interceptor/axiosInterceptor";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Input from "@/component/atoms/Input/Input";
import Button from "@/component/atoms/Button";
import RenderToast from "@/component/atoms/RenderToast";
import { mergeClass } from "@/resources/utils/helper";

const SignUpTemplate = () => {
  const router = useRouter();
  const { Post } = useAxios();
  const [loading, setLoading] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const signupFormik = useFormik({
    initialValues: signupFormValues,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    console.log("signup values", values);
    RenderToast({
      type: "success",
      message: "Account created successfully! Please verify your email.",
    });
  };

  return (
    <AuthWrapper 
      title="Join Our Community!" 
      description="Start your educational journey with us today!" 
      image={"/images/app-images/auth.png"}
    >
      <div className={classes.signupCard}>
        <form onSubmit={signupFormik.handleSubmit} className={classes.signupForm}>
          <h2 className={mergeClass("fs-50 fw-600", classes.formTitle)}>Sign Up</h2>
          
          <div className={classes.inputGroup}>
            <Input
              label="Full Name"
              placeholder="John Doe"
              value={signupFormik.values.fullName}
              setValue={(val) => {
                signupFormik.setFieldValue("fullName", val);
              }}
              errorText={signupFormik.touched.fullName && signupFormik.errors.fullName}
            />
          </div>

          <div className={classes.inputGroup}>
            <Input
              label="Email address"
              placeholder="john.doe@gmail.com"
              value={signupFormik.values.email}
              setValue={(val) => {
                signupFormik.setFieldValue("email", val);
              }}
              errorText={signupFormik.touched.email && signupFormik.errors.email}
            />
          </div>

          <div className={classes.inputGroup}>
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={signupFormik.values.password}
              setValue={(val) => {
                signupFormik.setFieldValue("password", val);
              }}
              errorText={signupFormik.touched.password && signupFormik.errors.password}
            />
          </div>

          <div className={classes.inputGroup}>
            <Input
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              value={signupFormik.values.confirmPassword}
              setValue={(val) => {
                signupFormik.setFieldValue("confirmPassword", val);
              }}
              errorText={signupFormik.touched.confirmPassword && signupFormik.errors.confirmPassword}
            />
          </div>

          <div className={classes.termsRow}>
            <label className={classes.agreeToTerms}>
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className={classes.checkbox}
              />
              <span className={classes.checkboxLabel}>
                I agree to the{" "}
                <span className={classes.termsLink}>Terms of Service</span>{" "}
                and{" "}
                <span className={classes.termsLink}>Privacy Policy</span>
              </span>
            </label>
          </div>

          <div className={classes.signupButton}>
            <Button
              label={loading === "submitSignup" ? "Creating Account..." : "Sign Up"}
              variant="primary"
              type="submit"
              disabled={loading === "submitSignup" || !agreeToTerms}
            />
          </div>

          <div className={classes.separator}>
            <span className={classes.separatorText}>or</span>
          </div>

          <div className={classes.socialSignup}>
            <Button
              label="Sign up with Google"
              variant="secondary"
              leftIcon={<FcGoogle />}
            />
          </div>

          <div className={classes.loginLink}>
            <p>
              Already have an account?{" "}
              <span className={classes.loginText}>
                Log in here
              </span>
            </p>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default SignUpTemplate;
