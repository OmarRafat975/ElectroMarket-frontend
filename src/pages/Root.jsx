import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

function RootLayout() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
