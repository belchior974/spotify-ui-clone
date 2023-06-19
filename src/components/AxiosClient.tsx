"use client"
import React, { createContext } from 'react';
import axios, { AxiosInstance } from 'axios';

// Crie uma interface para o contexto do Axios
interface AxiosContextProps {
  axiosInstance: AxiosInstance;
}

interface AxiosProviderProps {
    children: React.ReactNode;
}

// Crie o contexto do Axios
export const AxiosContext = createContext<AxiosContextProps>({
  axiosInstance: axios.create(),
});

// Componente de provedor do contexto
export const AxiosProvider = ({ children }: AxiosProviderProps) => {
  // Defina o header de autorização
//   const authorizationHeader = `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;

//   console.log(authorizationHeader)

  // Crie uma nova instância do Axios com o header de autorização
  const axiosInstance = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    },
  });

//   console.log(axiosInstance)

  return (
    <AxiosContext.Provider value={{ axiosInstance }}>
      {children}
    </AxiosContext.Provider>
  );
};
