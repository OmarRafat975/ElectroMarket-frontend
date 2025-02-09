import { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ShopContext } from '../context/ctxInit';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Verify() {
  const navigate = useNavigate();
  const { token, handleResetCart, backEndURL } = useContext(ShopContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');

  const verifyPayment = async () => {
    try {
      if (!token) return null;
      const response = await axios.post(
        backEndURL + '/orders/verify',
        { success, orderId },
        { headers: { authorization: 'Bearer ' + token } }
      );
      if (response.data.status === 'success') {
        handleResetCart();
        navigate('/my-orders');
      } else {
        navigate('/cart');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return <div></div>;
}
