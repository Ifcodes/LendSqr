/* eslint-disable react/display-name */
import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import Dropdown from "../Dropdown";
import ArrowDown from "../Vectors/ArrowDown";
import Avatar from "../Vectors/Avatar";
import styles from "./profileSelectorStyles.module.scss";

type profileData = {
  username: string;
  profileImgLink: string;
};

const data = [
  {
    username: "Ayodeji",
    profileImgLink: "/Images/image_4.png",
  },
  {
    username: "Deji",
    profileImgLink: "/Images/profile_pics.jpeg",
  },
];

const ProfileSelector = () => {
  const [selectedProfile, setSelectedProfile] = useState<profileData>({
    username: "",
    profileImgLink: "",
  });
  const [profiles, setProfiles] = useState<Array<profileData>>([
    {
      username: "",
      profileImgLink: "",
    },
  ]);
  const [showDropdown, setShowDropdown] = useState(false);

  const { username, profileImgLink } = selectedProfile;

  useEffect(() => {
    setProfiles(data);
    setSelectedProfile(data[0]);
  }, []);
  return (
    <div className={styles.mainWrapper}>
      <Avatar imgLink={profileImgLink} userInitial={username?.charAt(0)} />
      <div
        className={styles.userNameCont}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span className="text-base font-medium text-navy font-workSans">
          {username}
        </span>
        <div className={`ml-3 ${!showDropdown && styles.rotateArrow}`}>
          <ArrowDown />
        </div>
      </div>
      <Dropdown
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        cardContentStyle={styles.dropdownCard}
        overlayStyle={styles.dropdownOverlay}
      >
        {profiles.map(({ username, profileImgLink }) => (
          <div
            key={username}
            onClick={() => {
              setShowDropdown(false);
              setSelectedProfile({ username, profileImgLink });
            }}
            className={styles.dropdownUserCont}
          >
            <Avatar
              imgLink={profileImgLink}
              imgAlt="User Image"
              userInitial={username?.charAt(0)}
              className={styles.dropdownUserImg}
            />
            <span className="text-xs font-medium text-navy font-workSans">
              {username}
            </span>
          </div>
        ))}
      </Dropdown>
    </div>
  );
};
export default ProfileSelector;
