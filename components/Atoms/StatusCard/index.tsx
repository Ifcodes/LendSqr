import React from "react";

const StatusCard = ({ text }: { text?: string }) => {
  const inActive = text === "Inactive";
  const pending = text === "Pending";
  const active = text === "Active";
  const blackListed = text === "Blacklisted";

  return (
    <div
      className={`w-max py-2 px-3 text-sm rounded-[100px] ${
        inActive
          ? "bg-[#545f7d0f] text-navy1"
          : pending
          ? "bg-[#e9b2001a] text-[#E9B200]"
          : active
          ? "bg-[#39cd620f] text-[#39cd62]"
          : blackListed
          ? "bg-[#e4033b1a] text-[#E4033B]"
          : ""
      }`}
    >
      <span>{text}</span>
    </div>
  );
};

export default StatusCard;
