import React from "react";
import { Redirect, Route } from "react-router";
import Spinner from "react-bootstrap/Spinner";
import useAuth from "../../../hooks/useAuth.";
const DashboardPrivate = ({ children, ...rest }) => {
  const { users, isLoading, admin } = useAuth();
  /* if (isLoading) {
    return (
      <div className="text-center my-5 py-5">
        <div className="my-5">
          <Spinner animation="grow" variant="danger" />
        </div>
      </div>
    );
  } */
  return (
    <Route
      {...rest}
      render={({ location }) =>
        users.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default DashboardPrivate;
