import { lazy, Suspense, useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";

import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore.js";

import Body from "./layouts/Body.jsx";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Contact from "./components/Contact";
import CardDetails from "./components/Cards/CradDetails.jsx";
import Shimer from "./components/shimer.jsx";
import SearchScreen from "./components/SearchModal/SearchScreen.jsx";
import ProfileForm from "./components/Profile/ProfileForm.jsx";
import BookingPage from "./components/BookingPages/BookingPage.jsx";
import Error from "./components/Error";
import ListingForm from "./components/Listing/ListingForm.jsx";
import SignIn from "./pages/Authentication/SignIn.jsx";
import SignUp from "./pages/Authentication/SignUp.jsx";
const TrekingDashboard = lazy(() =>
  import("./pages/Trek/TrekingDashboard.jsx")
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/details/:resId",
        element: <CardDetails />,
      },
      {
        path: "/treking",
        element: (
          <Suspense fallback={<Shimer />}>
            <TrekingDashboard />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: <SearchScreen />,
      },
      {
        path: "/profile",
        element: <ProfileForm />,
      },
      {
        path: "/checkout",
        element: <BookingPage />,
      },
      {
        path: "/listing",
        element: <ListingForm />,
      },
      {
        path: "/auth",
        element: <Outlet />,
        children: [
          {
            // Redirect /auth to /auth/signin
            index: true,
            element: <Navigate to="signin" replace />,
          },
          {
            path: "/auth/signin",
            element: <SignIn />,
          },
          {
            path: "/auth/signup",
            element: <SignUp />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}
