/* eslint-disable react/display-name */
import React, { memo, ReactNode, useRef } from "react";
import styles from "./dropDownStyles.module.scss";
import { useClickAway } from "react-use";

const Dropdown = memo(
  ({
    children,
    showDropdown,
    setShowDropdown = () => {},
    overlayStyle,
    cardContentStyle,
  }: {
    children: ReactNode;
    showDropdown?: boolean;
    setShowDropdown?: Function;
    overlayStyle?: string;
    cardContentStyle?: string;
  }) => {
    const clickRef = useRef(null);

    useClickAway(clickRef, () => {
      setShowDropdown(false);
    });

    return (
      <div
        ref={clickRef}
        className={`${
          showDropdown ? styles.showOverlay : styles.hideOverlay
        } ${overlayStyle}`}
      >
        <div className={`${styles.cardContent} ${cardContentStyle}`}>
          {children}
        </div>
      </div>
    );
  }
);

export default Dropdown;
