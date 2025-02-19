import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react';
import Loading from '../components/Loading/Loading';

function RootLayout() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default RootLayout;
