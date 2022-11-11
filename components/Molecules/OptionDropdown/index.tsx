import React, { ReactNode, useRef, useState } from "react";
import { useClickAway } from "react-use";
import OptionsIcon from "../../Atoms/Vectors/OptionsIcon";
import styles from "./optionsDropdownStyles.module.scss";

const OptionsDropdown = ({ children }: { children: ReactNode }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const clickRef = useRef(null);

  useClickAway(clickRef, () => setShowDropdown(false));
  return (
    <div ref={clickRef} className={styles.dropdownWrapper}>
      <OptionsIcon
        className="cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      />
      <div
        className={`${styles.dropdownContent} ${
          showDropdown && styles.showDropDown
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default OptionsDropdown;
