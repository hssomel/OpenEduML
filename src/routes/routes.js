import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Unarchive from "@material-ui/icons/Unarchive";

const dashboardRoutes = [
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    icon: Dashboard,
  },
  {
    path: "/admin/profile",
    name: "User Profile",
    icon: Person,
  },
  {
    path: "/admin/payment",
    name: "Payments",
    icon: Person,
  },
  {
    path: "/admin/contactus",
    name: "Contact us",
    icon: Unarchive,
  },
  {
    path: "/admin/notifications",
    name: "Notifications",
    icon: Unarchive,
  },
  {
    path: "/admin/upgrade",
    name: "Upgrade To PRO",
    icon: Unarchive,
  },
];

export default dashboardRoutes;
