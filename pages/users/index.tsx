import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import StatusCard from "../../components/Atoms/StatusCard";
import DeleteUserIcon from "../../components/Atoms/Vectors/DeleteUserIcon";
import EyeIcon from "../../components/Atoms/Vectors/EyeIcon";
import OptionsIcon from "../../components/Atoms/Vectors/OptionsIcon";
import UserWithTick from "../../components/Atoms/Vectors/UserWithTickIcon";
import FilterDropdown from "../../components/Molecules/FilterDropdown";
import OptionsDropdown from "../../components/Molecules/OptionDropdown";
import Table from "../../components/Organisms/Table";
import UsersStats from "../../components/Organisms/UsersStats";
import DashboardLayout from "../../components/Templates/DashboardLayout";
import { getAllUsers } from "../../Services/userServices";
import { getDate } from "../../utils/getDate";
import { users } from "../../utils/helpers/demoUsers";
import styles from "./usersStyles.module.scss";

const UserPage = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([])

  const getUsers = () => {
    setIsLoading(true);
    getAllUsers(
      (res: any) => {
        setIsLoading(false);
        setUsers(res.data)
      },
      (err: any) => {
        setIsLoading(false);
        console.log({ err });
      }
    );
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <DashboardLayout>
      <span className=" text-2xl text-navy font-medium">Users</span>
      <UsersStats />
      <Table
        loading={isLoading}
        headings={[
          { name: "ORGANIZATION", key: "orgName" },
          { name: "USERNAME", key: "username" },
          { name: "EMAIL", key: "email" },
          { name: "PHONE NUMBER", key: "phoneNumber" },
          { name: "DATE JOINED", key: "joinedDate" },
          { name: "STATUS", key: "status" },
          { name: "", key: "cta" },
        ]}
        tableData={users.map((user: any) => {
          const dateJoined = getDate(user.createdAt);
          return {
            orgName: (
              <span className=" text-sm text-navy1">
                {user.orgName.charAt(0).toUpperCase() + user.orgName.slice(1)}
              </span>
            ),
            username: (
              <span className=" text-sm text-navy1">{user.userName}</span>
            ),
            email: <span className=" text-sm text-navy1">{user.email}</span>,
            phoneNumber: (
              <span className=" text-sm text-navy1">{user.phoneNumber}</span>
            ),
            joinedDate: (
              <span className=" text-sm text-navy1">{dateJoined}</span>
            ),
            status: <StatusCard text="Blacklisted" />,
            cta: (
              <OptionsDropdown>
                <Link
                  href={`/users/${user.id}/general-details`}
                  className={styles.optionContainer}
                >
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
          };
        })}
      />
    </DashboardLayout>
  );
};

export default UserPage;
