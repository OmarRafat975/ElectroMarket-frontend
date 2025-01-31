import { useContext, useEffect, useState } from 'react';
import LoginForm from '../components/User/LoginForm';
import RegisterForm from '../components/User/RegisterForm';
import { ShopContext } from '../context/ctxInit';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { backEndURL, setToken, token } = useContext(ShopContext);

  async function onSubmitHandler(e) {
    try {
      e.preventDefault();
      if (isRegister) {
        const response = await axios.post(backEndURL + '/users/register', {
          name,
          email,
          password,
          passwordConfirm,
        });

        if (response.data.status === 'success') {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backEndURL + '/users/login', {
          email,
          password,
        });

        if (response.data.status === 'success') {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <main className=" sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {!isRegister && (
        <LoginForm
          register={setIsRegister}
          onSubmitHandler={onSubmitHandler}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      )}
      {isRegister && (
        <RegisterForm
          register={setIsRegister}
          onSubmitHandler={onSubmitHandler}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordConfirm={passwordConfirm}
          setPasswordConfirm={setPasswordConfirm}
        />
      )}
    </main>
  );
}
