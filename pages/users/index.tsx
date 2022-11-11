import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import DeleteUserIcon from "../../components/Atoms/Vectors/DeleteUserIcon";
import EyeIcon from "../../components/Atoms/Vectors/EyeIcon";
import OptionsIcon from "../../components/Atoms/Vectors/OptionsIcon";
import UserWithTick from "../../components/Atoms/Vectors/UserWithTickIcon";
import OptionsDropdown from "../../components/Molecules/OptionDropdown";
import Table from "../../components/Organisms/Table";
import UsersStats from "../../components/Organisms/UsersStats";
import DashboardLayout from "../../components/Templates/DashboardLayout";
import styles from "./usersStyles.module.scss";

const UserPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <DashboardLayout>
      <span className=" text-2xl text-navy font-medium">Users</span>
      <UsersStats />
      <Table
        headings={[
          { name: "ORGANIZATION", key: "orgName" },
          { name: "USERNAME", key: "username" },
          { name: "EMAIL", key: "email" },
          { name: "PHONE NUMBER", key: "phoneNumber" },
          { name: "DATE JOINED", key: "joinedDate" },
          { name: "STATUS", key: "status" },
          { name: "", key: "cta" },
        ]}
        tableData={Array(20)
          .fill("")
          .map((_, index) => ({
            orgName: <span className=" text-sm text-navy1">LendSqr</span>,
            username: <span className=" text-sm text-navy1">Desmond</span>,
            email: (
              <span className=" text-sm text-navy1">
                bernarddesmond16@gmail.com
              </span>
            ),
            phoneNumber: (
              <span className=" text-sm text-navy1">08102228633</span>
            ),
            joinedDate: (
              <span className=" text-sm text-navy1">May 15, 2020 10:00 AM</span>
            ),
            status: <span className=" text-sm text-navy1">Inactive</span>,
            cta: (
              <OptionsDropdown>
                <Link href={"/users/1"} className={styles.optionContainer}>
                  <EyeIcon />
                  <span>View Details</span>
                </Link>
                <div className={styles.optionContainer}>
                  <DeleteUserIcon />
                  <span>Blacklist User</span>
                </div>
                <div className={styles.optionContainer}>
                  <UserWithTick />
                  <span>Activate User</span>
                </div>
              </OptionsDropdown>
            ),
          }))}
      />
    </DashboardLayout>
  );
};

export default UserPage;
