import { useContext, useEffect } from "react";
import { Redirect } from "react-router";
import AuthenContext from "../context/Authen";

const Login = (props) => {
  const context = useContext(AuthenContext);
  console.log(context);
  useEffect(() => {}, []);
  // return <Redirect to={""}></Redirect>;
  return <div>Login</div>;
};

export default Login;
