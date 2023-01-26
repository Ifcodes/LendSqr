import { Box } from "@mui/material";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import React from "react";

const EmptyData = () => {
  return (
    <Box className="w-full h-full flex items-center justify-center flex-col">
      <HourglassBottomIcon className="text-navy1" />
      <span className="text-navy1">No data </span>
    </Box>
  );
};

export default EmptyData;
