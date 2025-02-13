import axios from '../api/axios';
import { useEffect } from 'react';
import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    if (!auth?.token) return;

    const requestIntercept = axios.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true; // Prevents looping

          const newToken = await refresh();
          if (!newToken) {
            return Promise.reject(error); // If refresh fails, reject the request
          }

          prevRequest.headers['Authorization'] = `Bearer ${newToken}`;
          return axios(prevRequest); // Retry the request with new token
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestIntercept);
      axios.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return axios;
};

export default useAxiosPrivate;
