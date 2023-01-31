import { Dayjs } from "dayjs";
import moment from "moment";
import React, { ChangeEvent, useState } from "react";
import Button from "../../Atoms/Button";
import DatePickerCustom from "../../Atoms/DatePicker";
import Dropdown from "../../Atoms/Dropdown";
import Input from "../../Atoms/Input";
import Selector from "../../Atoms/Selector";
import styles from "./filterDropdownStyle.module.scss";

type FilterDropdownProps = {
  open: boolean;
  setOpen: Function;
};

const FilterDropdown = ({ open, setOpen }: FilterDropdownProps) => {
  const [selectedDate, setSelectedDate] = useState(Date);

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log({ e: e.target.value });
    setSelectedDate(e.target.value);
  };

  return (
    <Dropdown
      showDropdown={open}
      setShowDropdown={setOpen}
      overlayStyle={styles.dropdownOverlay}
    >
      <form className={styles.dropdownCont}>
        <div>
          <Selector
            options={["org1", "org2"]}
            label="Organization"
            selectorName="organization"
          />
        </div>
        <div className={styles.inputCont}>
          <Input 
          id="username"
          label="Username" placeholder="User" />
        </div>
        <div className={styles.inputCont}>
          <Input id="email" label="Email" placeholder="Email" />
        </div>
        <div className={styles.inputCont}>
          <Input
            id="date"
            type="date"
            label="Date"
            placeholder="Date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div className={styles.inputCont}>
          <Input id="phone" label="Phone Number" placeholder="Phone Number" />
        </div>
        <div className={styles.inputCont}>
          <Input
           id="status"
           label="Status" placeholder="Status" />
        </div>
        <div className={styles.btnCont}>
          <Button btnText="Reset" isSecondary />
          <Button btnText="Filter" />
        </div>
      </form>
    </Dropdown>
  );
};

export default FilterDropdown;
