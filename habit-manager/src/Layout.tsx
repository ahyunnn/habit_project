import { Outlet } from "react-router-dom";
import Navbar from "./components/Common/Navbar/organisms/Navbar";
import Footer from "./components/Common/Footer/Organisms/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
