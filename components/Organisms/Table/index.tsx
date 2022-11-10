import React from "react";
import { generatedId } from "../../../utils/generatedId";
import FilterIcon from "../../Atoms/Vectors/FilterIcon";
import styles from "./tableStyles.module.scss";

type Props = {
  id?: string;
  headings?: Array<{ name: string; key: string }>;
  tableData?: Array<Object>;
  openFilterModal?: boolean;
};
const Table = ({
  headings = [{ name: "", key: "" }],
  tableData = [{}],
  openFilterModal,
}: Props) => {
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
                    {item.key && <FilterIcon className={styles.filterIcon} />}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {tableData.map((row: any, index: number) => (
              <tr key={tableId} className={styles.dataTableRow}>
                {headings.map((item, headIndex) => (
                  <td
                    key={`${tableId}-${index}-${headIndex}`}
                    className={styles.td}
                  >
                    {row[item.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
