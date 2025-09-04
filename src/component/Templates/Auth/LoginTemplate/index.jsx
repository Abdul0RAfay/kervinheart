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

const LoginTemplate = () => {

  const router = useRouter();
  const { Post } = useAxios();
  const [loading, setLoading] = useState(""); 

  const loginFormik = useFormik({
    initialValues: loginFormValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    console.log("values", values)
  };

  return (
    <AuthWrapper title="Welcome Back" description="Please enter your details" image={"/images/app-images/auth.png"}>
    <form onSubmit={loginFormik.handleSubmit} className={classes.loginForm}>
      <h2>Welcome Back</h2>
      <Input
        label="Email*"
        placeholder="Enter your Email"
        value={loginFormik.values.email}
        setValue={(val) => {
          loginFormik.setFieldValue("email", val);
        }}
        errorText={loginFormik.touched.email && loginFormik.errors.email}
      />

      <Input
        label="Password*"
        type="password"
        placeholder="Min 8 Characters"
        value={loginFormik.values.password}
        setValue={(val) => {
          loginFormik.setFieldValue("password", val);
        }}
        errorText={loginFormik.touched.password && loginFormik.errors.password}
      />

      <div
        className={classes.flexDiv}
      >
        <p>Forgot Password?</p>
      </div>

      <div className={classes.loginBottom}>
        <Button
          label={loading === "submitLogin" ? "Please Wait..." : "Login"}
          variant="primary"
          type="submit"
          disabled={loading === "submitLogin"}
        />
      </div>
    </form>
    </AuthWrapper>
  );
};

export default LoginTemplate;
