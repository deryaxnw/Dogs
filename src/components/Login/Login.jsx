import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { LoginCreate } from "./LoginCreate";
import { LoginPasswordLost } from "./LoginPasswordLost";
import { LoginPasswordReset } from "./LoginPasswordReset";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Hooks/UserContext";

export const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (login === true) {
      navigate("/conta", { replace: true }); // replace evita múltiplos push na stack do navegador
    }
  }, [login, navigate]);
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </>
  );
};
