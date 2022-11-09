/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import Image from "next/image";
import React, { memo } from "react";

const Avatar = memo(
  ({
    imgLink,
    imgAlt,
    userInitial,
    className,
  }: {
    imgLink?: string;
    imgAlt?: string;
    userInitial?: string;
    className?: string;
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
        ) : (
          <span>{userInitial}</span>
        )}
      </div>
    );
  }
);

export default Avatar;
