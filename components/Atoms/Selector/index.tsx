import React, { ChangeEvent, ChangeEventHandler } from "react";
import { generatedId } from "../../../utils/generatedId";
import ArrowDownOutline from "../Vectors/ArrowDownOutline";
import styles from "./selectorStyles.module.scss";

type SelectorProps = {
  options: Array<string>;
  label?: string;
  isRequired?: boolean;
  selectorName?: string;
  labelDescription?: string;
  value?: string;
  handleChange?: ChangeEventHandler<HTMLSelectElement>;
};
const Selector = ({
  options = [""],
  label,
  selectorName,
  value,
  handleChange,
}: SelectorProps) => {
  const id = generatedId();

  return (
    <div className={styles.selectorContainer}>
      <label htmlFor={id}>{label}</label>

      <div className={styles.selector}>
        <select
          value={value}
          onChange={handleChange}
          name={selectorName}
          id={id}
        >
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <ArrowDownOutline />
      </div>
    </div>
  );
};

export default Selector;
