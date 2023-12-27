import { createBrowserRouter } from "react-router-dom";
import Layout  from "../layouts/MainLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Guidance from "../pages/Guidance";
import Plans from "../pages/Plans";
import Resources from "../pages/Resources";
import Support from "../pages/Support";
import ForPartners from "../pages/ForPartners";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <AboutUs />
        },
        {
          path: "/guidance",
          element: <Guidance />
        },
        {
          path: "/plans",
          element: <Plans />
        },
        {
          path: "/resources",
          element: <Resources />
        }, {
          path: "/support",
          element: <Support />
        }, {
          path: "/partners",
          element: <ForPartners />
        }
      ]
    },
  ])

  export  default router;