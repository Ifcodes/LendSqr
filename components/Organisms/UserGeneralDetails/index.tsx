import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getAllUsers, getUsersId } from "../../../Services/userServices";
import {
  getUserEduEmployment,
  getUserGuarantor,
  getUserPersonalInfo,
  getUserSocials,
} from "../../../utils/helpers/generateGeneralDetails";
import Descriptions from "../../Molecules/Descriptions";
import styles from "./generalDetails.module.scss";

const UserGeneralDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedUser, setSelectedUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const storedUser =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("selectedUser") || ""
      : "";

  const getUsers = () => {
    setIsLoading(true);
    getUsersId(
      (res: any) => {
        setIsLoading(false);
      },
      (err: any) => {
        setIsLoading(false);
      },
      { id }
    );
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (storedUser) {
      const usersData = JSON.parse(storedUser);
      setSelectedUser(usersData?.data);
    }
  }, [storedUser]);

  const personalInfo = getUserPersonalInfo(selectedUser);
  const educationAndEmployment = getUserEduEmployment(selectedUser);
  const userSocials = getUserSocials(selectedUser);
  const userGuarantor = getUserGuarantor(selectedUser);

  return (
    <div className={styles.detailsWrapper}>
      <Descriptions
        descriptionsList={personalInfo}
        title="Personal Information"
      />
      <Descriptions
        descriptionsList={educationAndEmployment}
        title={"Education and Employment"}
      />
      <Descriptions descriptionsList={userSocials} title={"Socials"} />
      <Descriptions descriptionsList={userGuarantor} title={"Guarantor"} />
    </div>
  );
};

export default UserGeneralDetails;
