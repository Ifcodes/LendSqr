import { Pagination } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import Dropdown from "../Dropdown";
import ArrowDownOutline from "../Vectors/ArrowDownOutline";
import styles from "./paginationStyles.module.scss";

type PaginationProps = {
  currentPage: number;
  totalCount: number;
  onPageChange: (event: ChangeEvent<unknown>, value: number) => void;
  onRowsPerPageChange: (val: number) => void;
  rowsPerPage: number;
};
const PaginationCustom = ({
  currentPage,
  totalCount,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}: PaginationProps) => {
  const totalPages = totalCount / rowsPerPage;
  const [openRowSelector, setOpenRowSelector] = useState(false);
  const rows = [10, 25, 50, 100];

  return (
    <div className={styles.paginationWrapper}>
      <div className={styles.rowsPerPageCont}>
        <span>Showing</span>
        <button onClick={() => setOpenRowSelector(true)}>
          <span>{rowsPerPage || 0}</span>
          <ArrowDownOutline />
          <Dropdown
            showDropdown={openRowSelector}
            setShowDropdown={setOpenRowSelector}
            overlayStyle={styles.rowSelectorDropdown}
          >
            <div className={styles.rowSelectorCont}>
              {rows.map((row) => (
                <div
                  className={styles.selector}
                  key={`${row}`}
                  onClick={() => {
                    setOpenRowSelector(false);
                    onRowsPerPageChange(row);
                  }}
                >
                  <span>{row}</span>
                </div>
              ))}
            </div>
          </Dropdown>
        </button>
        <span>out of {totalCount}</span>
      </div>
      <div className={styles.pageCount}>
        <Pagination
          page={currentPage}
          count={totalPages}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default PaginationCustom;
