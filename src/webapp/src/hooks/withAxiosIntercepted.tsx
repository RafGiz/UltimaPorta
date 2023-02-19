import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

export function withAxiosIntercepted<T extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<T>
) {
  return function AxiosIntercepted(props: T) {

    const [isInitialized, setInitialized] = useState<boolean>(false);

    useEffect (() => {
        axios.interceptors.request.use((config: AxiosRequestConfig ) => {
          return {
            ...config,
            baseURL: process.env.REACT_APP_API_URL
          };
        });
        setInitialized(true)
    },[])

    return isInitialized ? <Component {...props} /> : <></>
  };
}
