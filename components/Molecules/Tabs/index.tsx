import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./tabStyles.module.scss";

type TabProps = {
  tabs: Array<{
    label: string;
    path?: string;
  }>;
  defaultTab?: string;
};

const Tabs = ({ tabs, defaultTab }: TabProps) => {
  const router = useRouter();
  const { id, tab } = router.query;
  const [selectedTab, setSelectedTab] = useState<string | undefined>(
    defaultTab
  );

  const handleTabChange = (index: number, tab?: string) => {
    router.push(`/users/${id}/${tab}`);
    setSelectedTab(tab);
  };

  return (
    <div className={styles.tabsWrapper}>
      {tabs.map((tb, index) => {
        const activeTab = selectedTab === tb.path || tab === tb.path;
        return (
          <div
            key={tb.label}
            onClick={() => handleTabChange(index, tb.path)}
            className={activeTab ? styles.active : styles.tab}
          >
            <span>{tb.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
