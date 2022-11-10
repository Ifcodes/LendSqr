import React from "react";
import Table from "../../components/Organisms/Table";
import UsersStats from "../../components/Organisms/UsersStats";
import DashboardLayout from "../../components/Templates/DashboardLayout";
import { demoUserStats } from "../../utils/helpers/demoUserStats";

const UserPage = () => {
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
          { name: "", key: "" },
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
          }))}
      />
    </DashboardLayout>
  );
};

export default UserPage;
