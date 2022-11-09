import Link from "next/link";
import React, { useState } from "react";
import Input from "../../Atoms/Input";
import ProfileSelector from "../../Atoms/ProfileSelector";
import BellIcon from "../../Atoms/Vectors/BellIcon";
import Logo from "../../Atoms/Vectors/Logo";
import styles from "./navStyles.module.scss";

const Navbar = () => {
  const [searchItem, setSearchItem] = useState("");
  return (
    <nav className={styles.nav}>
      <div className={styles.logoCont}>
        <Logo />
        <div className="w-[25rem]">
          <Input
            type="search"
            name="search"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.userCont}>
        <Link
          href="#"
          className=" mr-12 text-navy underline font-roboto decoration-2 decoration-navy1"
        >
          Docs
        </Link>
        <BellIcon className="mr-7" />
        <ProfileSelector />
      </div>
    </nav>
  );
};

export default Navbar;
