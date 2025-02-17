import { useContext } from "react";
import { UserContext } from "../../../Hooks/UserContext";
import { Navigate } from "react-router-dom";
// import { User } from "../../User/User";

export const Protected = ({ children }) => {
  const { login } = useContext(UserContext);

    return login ? children : <Navigate to="/login"/>;

 
};
