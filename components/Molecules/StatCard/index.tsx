import React, { ReactNode } from "react";
import IconWrapper from "../../Atoms/IconWrapper";
import styles from "./statCardStyles.module.scss";

type Props = {
  title?: string;
  icon?: ReactNode;
  stat?: number;
  iconWrapperBg?: string;
};

const StatCard = ({ title, icon, stat, iconWrapperBg }: Props) => {
  return (
    <div className={styles.cardWrapper}>
      <div className=" mt-5">
        <IconWrapper icon={icon} bgColor={iconWrapperBg} />
      </div>
      <p className={styles.cardTitle}>{title}</p>
      <h3 className={styles.statText}>{stat?.toLocaleString()}</h3>
    </div>
  );
};

export default StatCard;
