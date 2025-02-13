import axios from '../api/axios';

import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const response = await axios.get(
        '/users/user/refresh',
        {},
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true, // Ensure cookies are sent
        }
      );
      if (response.data.status === 'success') {
        setAuth(response.data.token, response.data.name, 'REFRESH');
      }
      return response.data.token;
    } catch (error) {
      console.error('Error refreshing token:', error);
      return null;
    }
  };

  return refresh;
};

export default useRefreshToken;
