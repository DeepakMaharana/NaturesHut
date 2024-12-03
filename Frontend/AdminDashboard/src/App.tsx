import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import VillaManagement from './pages/VillaManagement';
import LocationManagement from './pages/LocationManagement';
import TrekManagement from './pages/TrekManagement';
import CampManagement from './pages/CampManagement';
import UserManagement from './pages/UserManagement';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import { useFetch } from './hooks/useApi';
import { clearAuth } from './utils/redux/authSlice';
const queryClient = new QueryClient();

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { data, loading, error, fetchData } = useFetch('/verify-token');
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchData();
    } else {
      dispatch(clearAuth());
      console.log("Clear Auth 1");
    }
  }, [fetchData]);

  // if (error) {
  //   dispatch(clearAuth());
  //   console.log("Clear Auth 2");
  // } else if (data) {
  //   console.log('Auth Data', data);
  // } else {
  //   dispatch(clearAuth());
  //   console.log("Clear Auth 3");
  // }

  return loading ? (
    <Loader />
  ) : (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          index
          element={
            <>
              {isAuthenticated ? (
                <>
                <ProtectedRoute>
                  <DefaultLayout>
                    <PageTitle title="Nature Nest - Admin" />
                    <ECommerce />
                  </DefaultLayout>
                  </ProtectedRoute>
                </>
              ) : (
                <>
                  <PageTitle title="Nature Nest - Signin" />
                  <SignIn />
                </>
              )}
            </>
          }
        />

        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Nature Nest - Signin" />
              <SignIn />
            </>
          }
        />

        {/* Admin Layout Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <DefaultLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="dashboard"
            element={
              <>
                <PageTitle title="Nature Nest - Admin" />
                <ECommerce />
              </>
            }
          />

          <Route
            path="location"
            element={
              <>
                <PageTitle title="Nature Nest - Location" />
                <LocationManagement />
              </>
            }
          />

          <Route
            path="villa"
            element={
              <>
                <PageTitle title="Nature Nest - Villa" />
                <VillaManagement />
              </>
            }
          />

          <Route
            path="trek"
            element={
              <>
                <PageTitle title="Nature Nest - Trek" />
                <TrekManagement />
              </>
            }
          />

          <Route
            path="user"
            element={
              <>
                <PageTitle title="Nature Nest - User" />
                <UserManagement />
              </>
            }
          />

          <Route
            path="camp"
            element={
              <>
                <PageTitle title="Nature Nest - Camp" />
                {/* <Calendar /> */}
                <CampManagement />
              </>
            }
          />
          <Route
            path="profile"
            element={
              <>
                <PageTitle title="Nature Nest - Profile" />
                <Profile />
              </>
            }
          />
          <Route
            path="forms/form-elements"
            element={
              <>
                <PageTitle title="Nature Nest - Form Elements" />
                <FormElements />
              </>
            }
          />
          <Route
            path="forms/form-layout"
            element={
              <>
                <PageTitle title="Nature Nest - Form Layout" />
                <FormLayout />
              </>
            }
          />
          <Route
            path="tables"
            element={
              <>
                <PageTitle title="Nature Nest - Tables" />
                <Tables />
              </>
            }
          />
          <Route
            path="settings"
            element={
              <>
                <PageTitle title="Nature Nest - Settings" />
                <Settings />
              </>
            }
          />
          <Route
            path="chart"
            element={
              <>
                <PageTitle title="Nature Nest - Basic Chart" />
                <Chart />
              </>
            }
          />
          <Route
            path="ui/alerts"
            element={
              <>
                <PageTitle title="Nature Nest - Alerts" />
                <Alerts />
              </>
            }
          />
          <Route
            path="ui/buttons"
            element={
              <>
                <PageTitle title="Nature Nest - Buttons" />
                <Buttons />
              </>
            }
          />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
