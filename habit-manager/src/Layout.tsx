import { Outlet } from "react-router-dom";
import Navbar from "./components/Common/Navbar/organisms/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
