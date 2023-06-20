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


export const AxiosContext = createContext<AxiosContextProps>({
  axiosInstance: axios.create(),
});


export const AxiosProvider = ({ children }: AxiosProviderProps) => {
  const axiosInstance = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    },
  });



  return (
    <AxiosContext.Provider value={{ axiosInstance }}>
      {children}
    </AxiosContext.Provider>
  );
};
