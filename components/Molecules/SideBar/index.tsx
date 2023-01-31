import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { text } from "stream/consumers";
import { menuTabs } from "../../../utils/helpers/dashboardTabs";
import SideNavLink from "../../Atoms/SideNavLink";
import { Text } from "../../Atoms/Typography";
import ArrowDownOutline from "../../Atoms/Vectors/ArrowDownOutline";
import BriefCaseIcon from "../../Atoms/Vectors/BriefCaseIcon";
import HomeIcon from "../../Atoms/Vectors/HomeIcon";
import SearchIcon from "../../Atoms/Vectors/SearchIcon";
import styles from "./sideBarStyles.module.scss";

const SideBar = () => {
  const router = useRouter();
  const { pathname } = router;
  const [switchOrg, setSwitchOrg] = useState(false);
  const organizations = [
    { orgName: "Ayodeji", orgLink: "#" },
    { orgName: "Deji", orgLink: "#" },
  ];

  return (
    <aside className={styles.sideBarWrapper}>
      <SideNavLink
        icon={<BriefCaseIcon />}
        text="Switch Organization"
        isActive={switchOrg}
        hasOptions
        path="#"
        setIsActive={setSwitchOrg}
        handleClick={() => setSwitchOrg(!switchOrg)}
        optionChild={organizations.map(({ orgName, orgLink }) => (
          <li key={orgName} className="py-2 pl-7 cursor-pointer hover:border-l-4 hover:border-solid hover:border-cyanBlue hover:bg-cyanLight">
            <Link
              href={orgLink}
              onClick={() => setSwitchOrg(false)}
              className="text-base text-navy "
            >
              {orgName}
            </Link>
          </li>
        ))}
      />

      <div className=" mt-10">
        <SideNavLink
          path="/dashboard"
          icon={<HomeIcon />}
          text="Dashboard"
          isActive={pathname === "/dashboard"}
        />
      </div>
      <div className="pb-24">
        {menuTabs.map(({ groupTitle, menuItems }) => (
          <div key={groupTitle}>
            <p className="mt-[2.56rem] mb-3 text-xs font-medium pl-7 uppercase text-navy1">
              {groupTitle}
            </p>
            <div>
              {menuItems.map((item) => (
                <SideNavLink
                  key={item.title}
                  isActive={item.path === pathname}
                  icon={<item.icon />}
                  text={item.title}
                  path={item.path}
                  handleClick={() => router.push(item.path)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
