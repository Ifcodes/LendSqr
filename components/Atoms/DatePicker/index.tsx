import { TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Dayjs } from "dayjs";
import moment from "moment";
import React from "react";
import Input from "../Input";

type DatePickerProps = {
  selectedDate: Dayjs | null;
  handleDateChange: (
    value: Dayjs | null,
    keyboardInputValue?: string | undefined
  ) => void;
};
const DatePickerCustom = ({
  selectedDate,
  handleDateChange = () => {},
}: DatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div>
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </LocalizationProvider>
  );
};

export default DatePickerCustom;
