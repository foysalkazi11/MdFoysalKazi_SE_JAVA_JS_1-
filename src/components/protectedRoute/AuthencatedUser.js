import React from "react";
import { Route, Redirect } from "react-router-dom";
import {useSelector} from 'react-redux'

const AuthencatedUser = (props) => {
  const {userInfo} = useSelector(state => state?.user)
  return (
    <Route
      path={props.path}
      render={(data) =>
        userInfo?.email ? (
          <props.component {...data} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    ></Route>
  );
};

export default AuthencatedUser;