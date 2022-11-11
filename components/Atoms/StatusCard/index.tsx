import React from "react";

const StatusCard = ({ text }: { text?: string }) => {
  return (
    <div className="">
      <span>{text}</span>
    </div>
  );
};

export default StatusCard;
