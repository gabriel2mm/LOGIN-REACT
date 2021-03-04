import React, { useState, createContext, useEffect } from "react";
import { API } from "../Services/API";
import axios from "axios";
import jwt from "jwt-decode";

export const UserContext = createContext({
  user: {},
  signIn: null,
  logout: null,
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    const tokenLocal = localStorage.getItem("token");
    if (tokenLocal) {
      const user = jwt(tokenLocal);
      setUser(user);
      setToken(tokenLocal);
    }
  }, [token]);

  async function signIn(email, password) {
    try {
      const response = await API().post(`${process.env.REACT_APP_BASEURL}/login`, { email, senha: password });
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        axios.defaults.headers.common["Authorization"] = `Bearer  ${response.data.token}`;
        localStorage.setItem("token", response.data.token);

        const user = await jwt(response.data.token);
        setUser(user);
        setToken(response.data.token);

        return true;
      }
    } catch (e) {
      console.debug("credenciais inválidas");
    }

    return false;
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, token, signIn, logout }}>
      {children}
    </UserContext.Provider>
  );
};
