/* eslint-disable react-hooks/exhaustive-deps */
import { Skeleton } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { generatedId } from "../../../utils/generatedId";
import EmptyData from "../../Atoms/EmptyDataPage";
import PaginationCustom from "../../Atoms/Pagination";
import FilterIcon from "../../Atoms/Vectors/FilterIcon";
import FilterDropdown from "../../Molecules/FilterDropdown";
import TableLoader from "./tableLoader";
import styles from "./tableStyles.module.scss";

type Props = {
  id?: string;
  headings?: Array<{ name: string; key: string }>;
  tableData?: Array<any>;
  loading?: boolean;
  openFilterModal?: boolean;
  setOpenFilterModal?: Function;
  currentPage?: number;
  setCurrentPage?: Function;
  rowsPerPage?: number;
  setRowsPerPage?: Function;
};
const Table = ({
  headings = [{ name: "", key: "" }],
  tableData = [{}],
  // users,
  // setUsers
  loading = false,
}: Props) => {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [tableRows, setTableRows] = useState(tableData.slice(0, rowsPerPage));

  console.log({ tableData });
  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    const current = value * rowsPerPage - rowsPerPage;
    const newData = tableData.slice(current + 1, current + rowsPerPage);

    if (value === 1) {
      setTableRows((row) => tableData.slice(0, rowsPerPage));
    } else {
      setTableRows((row) => newData);
    }
  };

  const handleFilter = (filterData: any) => {
    const filteredData = tableData.filter((data) => {
      const orgName = data.orgName.props.children
        .toLowerCase()
        .includes(filterData.orgName.toLowerCase());
      const username = data.username.props.children
        .toLowerCase()
        .includes(filterData.username);
      const email = data.email.props.children
        .toLowerCase()
        .includes(filterData.email);
      const joined = new Date(data.joined);
    });
  };

  useEffect(() => {
    const current = currentPage * rowsPerPage - rowsPerPage;
    const newData = tableData.slice(current + 1, current + rowsPerPage);
    if (currentPage === 1) {
      setTableRows((row) => tableData.slice(0, rowsPerPage));
    } else {
      setTableRows((row) => newData);
    }
  }, [currentPage, rowsPerPage, loading]);

  const tableId = generatedId();
  return (
    <div className={styles.tableWrapper}>
      <div className={styles.tableCont}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              {headings.map((item, index) => (
                <th key={`${item.key}-${index}`} className={styles.th}>
                  <div className={styles.theadContent}>
                    <span className={styles.tableHeadText}>{item.name}</span>
                    {item.key !== "cta" && (
                      <FilterIcon
                        className={styles.filterIcon}
                        onClick={() => setOpenFilterModal(true)}
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {loading ? (
              <tr className="w-full">
                {headings.map((item) => (
                  <td key={item.key}>
                    <TableLoader />
                  </td>
                ))}
              </tr>
            ) : (
              tableRows.map((row: any, index: number) => (
                <tr key={`${tableId}-${index}`} className={styles.dataTableRow}>
                  {headings.map((item, headIndex) => (
                    <td
                      key={`${tableId}-${index}-${headIndex}`}
                      className={styles.td}
                    >
                      {row[item.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
        {!loading && tableRows.length === 0 && (
          <div className={styles.emptyPage}>
            <EmptyData />
          </div>
        )}
      </div>
      <PaginationCustom
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalCount={tableData.length}
        onRowsPerPageChange={setRowsPerPage}
      />
      <FilterDropdown open={openFilterModal} setOpen={setOpenFilterModal} />
    </div>
  );
};

export default Table;
