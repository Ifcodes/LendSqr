import React, { useState } from "react";
import { users } from "../../../utils/helpers/demoUsers";
import StarFilledIcon from "../../Atoms/Vectors/StarFilledIcon";
import StarOutlineIcon from "../../Atoms/Vectors/StarOutlineIcon";
import UsernameWrapper from "../../Molecules/UsernameWrapper";
import styles from "./userDetailsCardStyles.module.scss";

type Props = {
  username?: string;
  imgUrl?: string;
  userAccount?: string;
};

const UserDetailsCard = ({ id }: { id?: string | Array<string> }) => {
  const [tier, setTier] = useState(1);
  const selectedUser = users.find((us) => us.id.toString() === id);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.basicInfoCard}>
        <div className={styles.basicInfoCont}>
          <div>
            <UsernameWrapper
              userImgLink={selectedUser?.profile.avatar}
              userFullName={`${selectedUser?.profile.firstName} ${selectedUser?.profile.lastName}`}
              userAccountNo={selectedUser?.accountNumber}
            />
          </div>
          <div className={styles.tierCont}>
            <span>{"User's Tier"}</span>
            <div className={styles.starsCont}>
              <StarFilledIcon />
              {tier === 2 ? <StarFilledIcon /> : <StarOutlineIcon />}
              {tier === 3 ? <StarFilledIcon /> : <StarOutlineIcon />}
            </div>
          </div>
          <div className={styles.accBalCont}>
            <h3 className={styles.accBalance}>
              ₦{selectedUser?.accountBalance}
            </h3>
            <span
              className={styles.bvnText}
            >{`${selectedUser?.profile.bvn}/Providus Bank`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;
