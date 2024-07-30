import LoadingScreen from "@/components/loading-screen";
import { ElementType, lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen isDashboard={true} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        { path: "/", element: <Navigate to="/lead" /> },
        { path: "lead", element: <Home /> },
        { path: "suppliers", element: <SuppliersList /> },
      ],
    },
    {
      path: "*",
      children: [
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
}

// PAGES
const Home = Loadable(lazy(() => import("../pages/home")));
const NotFound = Loadable(lazy(() => import("../pages/404")));
const SuppliersList = Loadable(lazy(() => import("../pages/suppliers-list")));
