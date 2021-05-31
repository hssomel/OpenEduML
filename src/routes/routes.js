import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import PinDropIcon from "@material-ui/icons/PinDrop";
import CreditCardIcon from "@material-ui/icons/CreditCard";

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
    icon: CreditCardIcon,
  },
  {
    path: "/contact",
    name: "Contact us",
    icon: PinDropIcon,
  },
];

export default dashboardRoutes;
