import { createContext, useCallback, useEffect, useState } from "react";
import {
  TOKEN_POST,
  TOKEN_VALIDATE_POST,
  USER_GET,
} from "../../service/instace";
// import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setError] = useState(null);
  // const navigate = useNavigate()

  const userLogout = useCallback( async function userLogout() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
  }, [])


  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
    console.log(json);
  }

  async function userLogin(username, password) {
    try {
      setError(null)
      setLoading(true)
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if(!tokenRes.ok) throw new Error(`Error: Usuário inválido`);
      
      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      setLogin(true)
    } catch (erro) {
      setError(erro.message);
      setLogin(false);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token && login === null) { // Apenas executa se login for null
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("TOKEN INVÁLIDO");
  
          await getUser(token);
        } catch (erro) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } 
    }
    autoLogin();
  }, [userLogout, login]); // Agora depende de login para evitar loops
  return (
    <UserContext.Provider value={{ data, userLogin, userLogout , loading, login, erro}}>
      {children}
    </UserContext.Provider>
  );
};
