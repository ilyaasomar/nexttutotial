"use client";
import React from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div>
      <button onClick={() => signIn("google")}>Google SignIn</button>
    </div>
  );
};

export default Login;
