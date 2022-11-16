/* eslint-disable react/display-name */
import React, { memo } from "react";
import ProfileImage from "../../Atoms/UserProfileImage";
import Avatar from "../../Atoms/Vectors/Avatar";
import styles from "./usernameWrapperStyles.module.scss";

const UsernameWrapper = memo(
  ({
    userImgLink,
    userFullName,
    userAccountNo,
  }: {
    userImgLink?: string;
    userFullName?: string;
    userAccountNo?: string;
  }) => {
    return (
      <div className={styles.wrapper}>
        <ProfileImage
          imgLink={userImgLink}
          imgAlt=""
          avatar={<Avatar />}
          className={styles.userImg}
        />
        <div className={styles.nameCont}>
          <h2>{userFullName}</h2>
          <span>{userAccountNo}</span>
        </div>
      </div>
    );
  }
);

export default UsernameWrapper;
