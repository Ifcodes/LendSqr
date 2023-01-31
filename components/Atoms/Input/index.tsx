/* eslint-disable react/display-name */
import React, { memo, useState } from "react";
import { generatedId } from "../../../utils/generatedId";
import { InputProps } from "../../../utils/types";
import Button from "../Button";
import SearchIcon from "../Vectors/SearchIcon";
import styles from "./inputStyles.module.scss";

const Input = memo(
  ({ label, type, forAuth, id, onSearch, ...props }: InputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className={styles.inputWrapper}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <div
          className={`${styles.fieldWrapper} ${
            forAuth && styles.authInputFieldWrapper
          }`}
        >
          <input id={id} type={showPassword ? "text" : type} {...props} />
          {type === "search" && (
            <Button
              btnText={<SearchIcon />}
              otherClasses={styles.searchIconWrapper}
              onClick={onSearch}
            />
          )}
          {type === "password" && (
            <button
              type="button"
              className={styles.pswToggle}
              onClick={() => setShowPassword(!showPassword)}
            >
              <span>{showPassword ? "HIDE" : "SHOW"}</span>
            </button>
          )}
        </div>
      </div>
    );
  }
);

export default Input;
