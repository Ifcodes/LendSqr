import React from "react";
import { ButtonProps } from "../../../utils/types";
import styles from "./buttonStyles.module.scss";

const Button = ({ btnText, isSecondary, otherClasses, ...props }: ButtonProps) => {
  return (
    <button
      className={`${
        isSecondary ? styles.buttonSecondary : styles.buttonPrimary
      } ${otherClasses}`}
      {...props}
    >
      {btnText}
    </button>
  );
};

export default Button;
