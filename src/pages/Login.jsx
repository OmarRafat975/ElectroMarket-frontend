import { useEffect, useState } from 'react';
import LoginForm from '../components/User/LoginForm';
import RegisterForm from '../components/User/RegisterForm';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../api/axios';
import useAuth from '../hooks/useAuth';

export default function Login() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { auth, setAuth } = useAuth();

  async function onSubmitHandler(e) {
    try {
      e.preventDefault();
      if (isRegister) {
        const response = await axios.post('/users/register', {
          name,
          email,
          password,
          passwordConfirm,
        });

        if (response.data.status === 'success') {
          setAuth(response.data.token, response.data.name, 'LOGIN');
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post('/users/login', {
          email,
          password,
        });
        if (response.data.status === 'success') {
          setAuth(response.data.token, response.data.name, 'LOGIN');
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  useEffect(() => {
    if (auth.token) {
      navigate('/');
    }
  }, [auth, navigate]);

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
