import Link from "next/link";
import React, { ReactNode, useRef } from "react";
import { useClickAway } from "react-use";
import ArrowDownOutline from "../Vectors/ArrowDownOutline";
import styles from "./sideNavLinkStyle.module.scss";
import clsx from "clsx";

const SideNavLink = ({
  icon,
  text,
  isActive,
  setIsActive = () => {},
  hasOptions,
  optionChild,
  path,
  handleClick,
}: {
  icon?: ReactNode;
  text?: string;
  isActive?: boolean;
  hasOptions?: boolean;
  optionChild?: ReactNode;
  path: string;
  handleClick?: (e: any) => void;
  setIsActive?: Function;
}) => {
  const clickRef = useRef(null);

  useClickAway(clickRef, () => {
    setIsActive(false);
  });

  return (
    <div
      ref={clickRef}
      onClick={handleClick}
    >
      <div
        className={`${styles.itemWrapper} ${isActive && styles.active} flex items-center justify-between w-full  ${
          hasOptions ? "opacity-100" : isActive === false ? "opacity-[0.6]" : ""
        }`}
      >
        <div className="flex items-center">
          <>{icon}</>
          <span className={`text-base text-navy ml-3`}>{text}</span>
        </div>
        {hasOptions && (
          <div className=" justify-self-end ">
            <ArrowDownOutline className={`${!isActive && "rotate-180"}`} />
          </div>
        )}
      </div>
      {hasOptions &&  (
        <ul className={clsx(`${styles.dropDown}`, isActive && `${styles.showDropDown}`)}>
          {optionChild}
        </ul>
      )}
    </div>
  );
};

export default SideNavLink;
