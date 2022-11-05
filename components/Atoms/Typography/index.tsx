import { spawn } from "child_process";
import React from "react";
import { typographyProps } from "../../../utils/types";
import styles from "./typographyStyles.module.scss";

export const H1 = ({ text }: typographyProps) => {
  return <h1 className={styles.h1}>{text}</h1>;
};

export const Text = ({ text, classes }: typographyProps) => {
  return <span className={`${styles.span} ${classes && classes}`}>{text}</span>;
};
