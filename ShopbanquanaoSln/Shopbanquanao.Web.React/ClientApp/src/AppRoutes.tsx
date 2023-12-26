import Home from "./component/Home";
import AdminPage from "./admin/dashboard";

const AppRoutes = [
  {
    index: true,
    element: <Home/>
  },
  {
    path: "/dashboard",
    element: <AdminPage/>
  },
];

export default AppRoutes;
