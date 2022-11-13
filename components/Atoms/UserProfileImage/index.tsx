/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import Image from "next/image";
import React, { memo, ReactNode } from "react";

const ProfileImage = memo(
  ({
    imgLink,
    imgAlt,
    userInitial,
    className,
    avatar,
  }: {
    imgLink?: string;
    imgAlt?: string;
    userInitial?: string;
    className?: string;
    avatar?: ReactNode;
  }) => {
    return (
      <div
        className={`w-12 h-12 rounded-full bg-grey4 flex justify-center items-center text-navy uppercase text-xl ${className}`}
      >
        {imgLink ? (
          <img
            src={imgLink}
            alt={imgAlt || "avatar"}
            className="w-full h-full rounded-full"
          />
        ) : avatar ? (
          <>{avatar}</>
        ) : (
          <span>{userInitial}</span>
        )}
      </div>
    );
  }
);

export default ProfileImage;
