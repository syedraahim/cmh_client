import React,{useState,useEffect} from "react";
import { Route,Redirect} from "react-router-dom";
import { useSelector } from "react-redux";
import {adminUser} from "../../actions/auth";
// import CounterToRedirect from "./CounterToRedirect";

const AdminRoute = ({ children, ...rest }) => {

  const { user } = useSelector((state) => ({ ...state }));

  const [admin, setAdmin] = useState(false);

  useEffect( () => {
      if (user && user.token) {
          adminUser(user.token)
      .then ( res => {
          console.log("Admin user Route",res);
          setAdmin(true);
      })
      .catch ( (err) => {
         console.log("Admin route error",err);
         setAdmin(false);
      })
      }

  }, [user]);

  return admin ? (
    <Route {...rest} render={() => children} />
  ) : (
     <Redirect  to= "/" />
    // <CounterToRedirect />
  );
};

export default AdminRoute;