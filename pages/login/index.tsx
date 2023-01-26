import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../components/Atoms/Button";
import Input from "../../components/Atoms/Input";
import PageHead from "../../components/Atoms/PageHead";
import { H1, Text } from "../../components/Atoms/Typography";
import HeroImg from "../../components/Atoms/Vectors/HeroImage";
import Logo from "../../components/Atoms/Vectors/Logo";
import styles from "./loginStyles.module.scss";

const Login = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push("/users");
  };
  return (
    <div className={`${styles.login}`}>
      <PageHead title="Login" />
      <div className="w-full h-screen">
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.hero}>
          <div className={styles.heroImg}>
            <HeroImg />
          </div>
        </div>
      </div>
      <div className={styles.formWrapper}>
        <div className={styles.titleCont}>
          <H1 text="Welcome!" />
          <Text text="Enter details to login." />
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              forAuth
              type="email"
              name="email"
              required
              placeholder="Email"
              value={loginData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputField}>
            <Input
              forAuth
              name="password"
              type="password"
              required
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
            />
          </div>
          <div className={styles.forgotPwd}>
            <a href={"#"}>Forgot password</a>
          </div>
          <div className={styles.btnWrapper}>
            <Button type="submit" btnText="LOG IN" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
