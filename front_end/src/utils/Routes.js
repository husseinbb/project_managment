import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

/* export function IsUserRedirect({ loggedInPath, children, ...rest }) {
  const isLoggedIn = JSON.parse(window.localStorage.getItem("loggedIn"));
  console.log(isLoggedIn, "from user");

  return (
    <Route
      exact
      {...rest}
      render={() => {
        if (!isLoggedIn) {
          return children;
        }

        if (isLoggedIn) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
} */

export function ProtectedRoute({ children, ...rest }) {
  const isLoggedIn = JSON.parse(window.localStorage.getItem("loggedIn"));

  console.log(isLoggedIn, "protected");
  return (
    <Route
      exact
      {...rest}
      render={({ location }) => {
        if (isLoggedIn) {
          return children;
        }

        if (!isLoggedIn) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
