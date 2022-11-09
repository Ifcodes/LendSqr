import React, { ReactNode } from "react";
import Navbar from "../../Molecules/Navbar";
import SideBar from "../../Molecules/SideBar";
import styles from "./dashboardLayoutStyles.module.scss";

const DashboardLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className={styles.dashboardWrapper}>
      <Navbar />
      <div className={styles.dashboardContent}>
        <SideBar />
        <div className={styles.dashboardChild}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
