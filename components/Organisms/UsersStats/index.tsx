/* eslint-disable react/display-name */
import React, { memo, ReactNode } from "react";
import { demoUserStats } from "../../../utils/helpers/demoUserStats";
import PageHead from "../../Atoms/PageHead";
import StatCard from "../../Molecules/StatCard";
import styles from "./usersStatsStyles.module.scss";

type Props = {
  stats?: Array<{
    title: string;
    value: number;
    icon: ReactNode;
    iconBg: string;
  }>;
};
const UsersStats = memo(({ stats = [] }: Props) => {
  return (
    <div className={styles.statsWrapper}>
      <PageHead title="Users" />
      {demoUserStats.map((stat, index) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          stat={stat.value}
          icon={<stat.icon />}
          iconWrapperBg={
            index === 0
              ? styles.iconBg1
              : index === 1
              ? styles.iconBg2
              : index === 2
              ? styles.iconBg3
              : index === 3
              ? styles.iconBg4
              : ""
          }
        />
      ))}
    </div>
  );
});

export default UsersStats;
