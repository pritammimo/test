import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getStorage } from "../../helpers/apiHelper";
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <>
      {/* {window.scroll(0, 0)} */}
      <Route
        {...rest}
        render={(props) =>
          getStorage("token") ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
        }
      />
    </>
  );
};
export default PrivateRoute;
