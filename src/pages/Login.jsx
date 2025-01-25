import { useState } from 'react';
import LoginForm from '../components/User/LoginForm';
import RegisterForm from '../components/User/RegisterForm';

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <main className=" sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {!isRegister && <LoginForm register={setIsRegister} />}
      {isRegister && <RegisterForm register={setIsRegister} />}
    </main>
  );
}
