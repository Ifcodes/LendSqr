import React, { ReactNode } from "react";
import styles from "./descriptions.module.scss";

type DescriptionsProps = {
  children?: ReactNode;
  title?: string;
  descriptionsList: Array<{
    label?: string;
    value?: string;
  }>;
};
const Descriptions = ({
  children,
  descriptionsList,
  title,
}: DescriptionsProps) => {
  return (
    <div className={styles.descriptionsOverlay}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.descriptionsWrapper}>
        {descriptionsList.map(({ label, value }) => (
          <div key={label} className={styles.descriptionCont}>
            <h3 className={styles.label}>{label}</h3>
            <p className={styles.value}>{value || "N/A"}</p>
          </div>
        ))}
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

export default Descriptions;
