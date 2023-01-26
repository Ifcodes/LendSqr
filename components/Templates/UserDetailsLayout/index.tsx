import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import Button from "../../Atoms/Button";
import PageHead from "../../Atoms/PageHead";
import BackArrow from "../../Atoms/Vectors/BackArrow";
import UserDetailsCard from "../../Organisms/UserDetailsCard";
import DashboardLayout from "../DashboardLayout";
import styles from "./userDetailsLayoutStyles.module.scss";

const UserDetailsLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <DashboardLayout>
      <PageHead title={"User Details"} />
      <Link href={"/users"} className=" flex text-base text-navy1 items-center">
        <BackArrow />
        <span className=" ml-3">Back to Users</span>
      </Link>
      <div className="w-full flex justify-between items-center mt-6">
        <h3 className=" text-2xl text-navy font-medium">User Details</h3>
        <div className="w-max flex">
          <Button
            btnText={"Blacklist user"}
            otherClasses={styles.blackListBtn}
          />
          <Button btnText="Activate user" otherClasses={styles.activateBtn} />
        </div>
      </div>
      <UserDetailsCard id={id} />
      <div>{children}</div>
    </DashboardLayout>
  );
};

export default UserDetailsLayout;
