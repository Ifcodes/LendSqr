import { Skeleton } from "@mui/material";
import React from "react";

const TableLoader = () => {
  const list = Array(20).fill("");
  return (
    <>
      {list.map((_li, index) => (
        <Skeleton
          sx={{ width: "80%", paddingLeft: "0.5rem" }}
          key={`skel-${index}`}
        />
      ))}
    </>
  );
};

export default TableLoader;
