import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { getStorage } from "./helpers/apiHelper";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./pages/share_module/Header/Header";
import Footer from "./pages/share_module/Footer/Footer";
import HomePage from "./pages/Home_page/HomePage";
import Addusers from "./pages/AddUsers/Add-users";
import PrivateRoute from "./pages/RouteWrapper/PrivateRoute";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login/Login";
function App() {
  return (
    <>
      <Router basename={"/"}>
        <main className="d-flex flex-column min-vh-100">
          <Header />
          <Switch>
            {/* <PrivateRoute exact path="/home" component={HomePage} /> */}
            {/* <PrivateRoute exact path="/addusers" component={Addusers} /> */}
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/addusers" component={Addusers} />
            {/* <Route
            exact
            path="/"
            render={(props) =>
              !getStorage("token") ? (
                <Login {...props} />
              ) : (
                <Redirect to={"/dashboard"} />
              )
            }
          /> */}
            <Route exact path="/" component={Login} />
          </Switch>
          <Footer />
        </main>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
