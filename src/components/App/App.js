import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUserOperation } from "../../redux/auth/auth-operations";
import { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import Header from "../Header/Header";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";

const HomepageView = lazy(() =>
  import("../../views/HomepageView" /* webpackChunkName: "home-page" */),
);

const ContactsView = lazy(() =>
  import("../../views/ContactsView" /* webpackChunkName: "contacts-page" */),
);

const LoginView = lazy(() =>
  import("../../views/LoginView" /* webpackChunkName: "login-page" */),
);

const RegisterView = lazy(() =>
  import("../../views/RegisterView" /* webpackChunkName: "register-page" */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserOperation());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomepageView />
          </PublicRoute>

          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>

          <PrivateRoute exact path="/contacts">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
