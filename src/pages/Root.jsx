import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

function RootLayout() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="min-h-[100vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default RootLayout;
