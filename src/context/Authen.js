import React from "react";

const AuthenContext = React.createContext({
  redirectLoginURI: process.env.REACT_APP_REDIRECT_LOGIN_URI,
});

export default AuthenContext;
