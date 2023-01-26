import { useRouter } from "next/router";
import React from "react";
import EmptyPage from "../../../components/Atoms/EmptyPage";
import UserGeneralDetails from "../../../components/Organisms/UserGeneralDetails";
import UserDetailsLayout from "../../../components/Templates/UserDetailsLayout";
import styles from "../usersStyles.module.scss";

const UserDetailTab = () => {
  const router = useRouter();
  const { tab} = router.query;

  return (
    <UserDetailsLayout>
      {tab === "general-details" && <UserGeneralDetails />}
      {tab !== "general-details" && (
        <div className={styles.detailsWrapper}>
          <EmptyPage />
        </div>
      )}
    </UserDetailsLayout>
  );
};

export default UserDetailTab;
