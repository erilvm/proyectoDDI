import React, { useState, useEffect, createContext } from 'react';
import { storageController } from '../api/token';
import { userController } from '../../src/api/users';
import { tokenExpired } from '../utils/tokenExpired';

//percistente dos condiciones getSeccion , hacer la funcion de logout, crear la funcion y update
export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //COomprobar si existe el token en Async
  useEffect(() => {
    getSeccion();
  }, [])

  const getSeccion = async () => {
    const token = await storageController.getToken();
    if (!token) {
      logout();
      setLoading(false);
      return;
    }
    if (tokenExpired(token)) {
      logout();
    } else {
      login(token);
    }
  }


  const login = async (token) => {
    try {
      await storageController.setToken(token);
      const response = await userController.getMe();
      setUser(response);
      setLoading(false);
      console.log(response)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const logout = async () => {
    try {
    await storageController.removeToken();
      setUser(null);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const upDateUser = (key, value) => {
    setUser({
      ...user,
      [key]: value

    })
  }

  const data = {
    user,
    login,
    logout,
    upDateUser,
  }
  if (loading) return null;

  return (
    <AuthContext.Provider value={data}>
    {children}
  </AuthContext.Provider>
)};
