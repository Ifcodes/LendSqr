import AuditIcon from "../../components/Atoms/Vectors/AuditIcon";
import BadgePercentIcon from "../../components/Atoms/Vectors/BadgePercentIcon";
import BankIcon from "../../components/Atoms/Vectors/BankIcon";
import BriefCaseIcon from "../../components/Atoms/Vectors/BriefCaseIcon";
import ChartIcon from "../../components/Atoms/Vectors/ChartIcon";
import CoinIcon from "../../components/Atoms/Vectors/CoinIcon";
import GalaxyIcon from "../../components/Atoms/Vectors/GalaxyIcon";
import HandShakeIcon from "../../components/Atoms/Vectors/HandShakeIcon";
import LoanReqIcon from "../../components/Atoms/Vectors/LoanReqIcon";
import PiggyBankIcon from "../../components/Atoms/Vectors/PiggyIcon";
import SackIcon from "../../components/Atoms/Vectors/SackIcon";
import ScrollIcon from "../../components/Atoms/Vectors/ScrollIcon";
import SlidersIcon from "../../components/Atoms/Vectors/SlidersIcon";
import TransactionIcon from "../../components/Atoms/Vectors/TransactionIcon";
import UserCheckIcon from "../../components/Atoms/Vectors/UserCheckIcon";
import UserCogIcon from "../../components/Atoms/Vectors/UserCogIcon";
import UserFriendIcon from "../../components/Atoms/Vectors/UserFriendIcon";
import UsersIcon from "../../components/Atoms/Vectors/UsersIcon";
import UserTimeIcon from "../../components/Atoms/Vectors/UserTime";

export const menuTabs = [
  {
    groupTitle: "Customers",
    menuItems: [
      {
        title: "Users",
        icon: UserFriendIcon,
        path: "/users",
      },
      {
        title: "Guarantors",
        icon: UsersIcon,
        path: "#",
      },
      {
        title: "Loans",
        icon: SackIcon,
        path: "#",
      },
      {
        title: "Decision Models",
        icon: HandShakeIcon,
        path: "#",
      },
      {
        title: "Savings",
        icon: PiggyBankIcon,
        path: "#",
      },
      {
        title: "Loan Requests",
        icon: LoanReqIcon,
        path: "#",
      },
      {
        title: "Whitelist",
        icon: UserCheckIcon,
        path: "#",
      },
      {
        title: "Karma",
        icon: UserTimeIcon,
        path: "#",
      },
    ],
  },
  {
    groupTitle: "Businesses",
    menuItems: [
      {
        title: "Organization",
        icon: BriefCaseIcon,
        path: "/organizations",
      },
      {
        title: "Loan Products",
        icon: LoanReqIcon,
        path: "/loan-products",
      },
      {
        title: "Savings Products",
        icon: BankIcon,
        path: "/savings-products",
      },
      {
        title: "Fees and Charges",
        icon: CoinIcon,
        path: "/fees-and-charges",
      },
      {
        title: "Transactions",
        icon: TransactionIcon,
        path: "/transactions",
      },
      {
        title: "Services",
        icon: GalaxyIcon,
        path: "/services",
      },
      {
        title: "Service Account",
        icon: UserCogIcon,
        path: "/service-account",
      },
      {
        title: "Settlements",
        icon: ScrollIcon,
        path: "/settlements",
      },
      {
        title: "Reports",
        icon: ChartIcon,
        path: "/reports",
      },
    ],
  },
  {
    groupTitle: "Settings",
    menuItems: [
      {
        title: "Preferences",
        icon: SlidersIcon,
        path: "/preferences",
      },
      {
        title: "Fees and Prices",
        icon: BadgePercentIcon,
        path: "/fees-and-prices",
      },
      {
        title: "Audit Logs",
        icon: AuditIcon,
        path: "/audit-logs",
      },
    ],
  },
];
