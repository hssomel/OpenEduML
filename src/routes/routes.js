import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
// import DashboardPage from "views/Dashboard/Dashboard.js";
// import UserProfile from "views/UserProfile/UserProfile.js";
// import TableList from "views/TableList/TableList.js";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    // component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    // component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/payment",
    name: "Payments",
    icon: Person,
    // component: TableList,
    layout: "/admin",
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    icon: Unarchive,
    // component: UpgradeToPro,
    layout: "/admin",
  },
];

export default dashboardRoutes;
