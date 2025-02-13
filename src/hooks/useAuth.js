import { useContext } from 'react';
import { ShopContext } from '../context/ctxInit';

function useAuth() {
  const { authState, handleLoginOrRefresh } = useContext(ShopContext);
  return { auth: authState, setAuth: handleLoginOrRefresh };
}

export default useAuth;
