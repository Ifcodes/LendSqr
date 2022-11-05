import React from "react";
import Button from "../../components/Atoms/Button";
import Input from "../../components/Atoms/Input";
import { H1, Text } from "../../components/Atoms/Typography";
import HeroImg from "../../components/Atoms/Vectors/HeroImage";
import Logo from "../../components/Atoms/Vectors/Logo";
import PageHead from "../../components/Molecules/PageHead";
import styles from "./styleGuide.module.scss";

const StyleGuide = () => {
  return (
    <div className="p-4">
      <PageHead title="Style Guide" />
      <div className={styles.componentWrapper}>
        <Logo />
      </div>
      <div className={styles.componentWrapper}>
        <H1 text="Welcome!" />
      </div>
      <div className={styles.componentWrapper}>
        <Text text="Enter details to login" classes="font-bold" />
      </div>

      <div className={styles.componentWrapper}>
        <HeroImg />
      </div>
      <div className={styles.componentWrapper}>
        <Input type="password" forAuth />
      </div>
      <div className={styles.componentWrapper}>
        <Input type="search" />
      </div>
      <div className={`${styles.componentWrapper} `}>
        <Button btnText="Test Button" otherClasses={styles.btnClass} />
      </div>
    </div>
  );
};

export default StyleGuide;
