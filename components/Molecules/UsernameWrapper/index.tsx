/* eslint-disable react/display-name */
import React, { memo } from "react";
import ProfileImage from "../../Atoms/UserProfileImage";
import Avatar from "../../Atoms/Vectors/Avatar";
import styles from "./usernameWrapperStyles.module.scss";

const UsernameWrapper = memo(
  ({
    userImgLink,
    userName,
    userAccount,
  }: {
    userImgLink?: string;
    userName?: string;
    userAccount?: string;
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
          <h2>{userName}</h2>
          <span>{userAccount}</span>
        </div>
      </div>
    );
  }
);

export default UsernameWrapper;
