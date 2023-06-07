"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[0].value;
    const password = e.target[0].value;
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?Success=Account has been created");
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="username"
          required
        />
        <input
          type="email"
          className={styles.input}
          placeholder="email"
          required
        />
        <input
          type="password"
          className={styles.input}
          placeholder="password"
          required
        />
        <button className={styles.button}>Register</button>
        <Link href="/dashboard/login">Login with an exist account</Link>
      </form>
    </div>
  );
};

export default Register;
