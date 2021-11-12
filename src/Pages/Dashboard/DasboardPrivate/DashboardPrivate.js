import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router";
import Spinner from "react-bootstrap/Spinner";
import useAuth from "../../../hooks/useAuth.";
const DashboardPrivate = ({ children, ...rest }) => {
  const { users, isLoading } = useAuth();
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${users.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data);
      });
  }, [users.email]);
  if (isLoading) {
    return (
      <div className="text-center my-5 py-5">
        <div className="my-5">
          <Spinner animation="grow" variant="danger" />
        </div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        users.email && admin?.admin ? (
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
